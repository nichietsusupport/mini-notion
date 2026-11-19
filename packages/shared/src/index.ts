import { z } from "zod";

/**
 * API contract: single source of truth for apps/web, apps/api,
 * packages/realtime and packages/ai. Announce changes before merging.
 */

export const BlockType = z.enum([
  "paragraph",
  "heading",
  "todo",
  "table",
  "code",
]);
export type BlockType = z.infer<typeof BlockType>;

export const Block = z.object({
  id: z.string().uuid(),
  pageId: z.string().uuid(),
  type: BlockType,
  content: z.record(z.unknown()),
  position: z.number().int(),
});
export type Block = z.infer<typeof Block>;

export const Page = z.object({
  id: z.string().uuid(),
  workspaceId: z.string().uuid(),
  parentId: z.string().uuid().nullable(),
  title: z.string(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});
export type Page = z.infer<typeof Page>;

export const Workspace = z.object({
  id: z.string().uuid(),
  name: z.string(),
});
export type Workspace = z.infer<typeof Workspace>;

export const CreatePageInput = z.object({
  workspaceId: z.string().uuid(),
  parentId: z.string().uuid().nullable().default(null),
  title: z.string().min(1).default("Untitled"),
});
export type CreatePageInput = z.infer<typeof CreatePageInput>;

export const SearchQuery = z.object({
  workspaceId: z.string().uuid(),
  q: z.string().min(1),
});
export type SearchQuery = z.infer<typeof SearchQuery>;

export const ChatRequest = z.object({
  workspaceId: z.string().uuid(),
  message: z.string().min(1),
});
export type ChatRequest = z.infer<typeof ChatRequest>;
