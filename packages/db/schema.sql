create table workspaces (
  id uuid primary key default gen_random_uuid(),
  name text not null
);

create table pages (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references workspaces(id) on delete cascade,
  parent_id uuid references pages(id) on delete cascade,
  title text not null default 'Untitled',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table blocks (
  id uuid primary key default gen_random_uuid(),
  page_id uuid not null references pages(id) on delete cascade,
  type text not null check (type in ('paragraph','heading','todo','table','code')),
  content jsonb not null default '{}',
  position int not null,
  unique (page_id, position)
);

create index pages_workspace_idx on pages (workspace_id, parent_id);
create index blocks_search_idx on blocks using gin (to_tsvector('simple', content::text));
