import { defineField, defineType } from "sanity";

const author = defineType({
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});

export default author;
