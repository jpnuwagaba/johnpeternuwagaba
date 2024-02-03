export default {
  name: 'aboutMe',
  title: 'About Me',
  type: 'document',
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: 'aboutMe',
      title: 'About Me',
      type: "array",
      of: [{ type: "block" }, { type: "image"}, { type: "file"}],
    },
    {
      name: 'summary',
      title: 'Summary',
      type: "array",
      of: [{ type: "block" }, { type: "image"}, { type: "file"}],
    },
    {
      name: 'aboutMeImage',
      title: 'About Me Image',
      type: 'image',
    }
  ],
};