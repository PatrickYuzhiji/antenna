import { type SchemaTypeDefinition } from "sanity";
import blockContent from "./blockContent";
import post from "./post";
import author from "./author";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContent, post, author],
};
