export default {
  name: "professionalExperience",
  title: "Professional Experience",
  type: "document",
  fields: [
    {
      name: "company",
      title: "Company",
      type: "string",
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
    },
    {
      name: "summary",
      title: "Summary",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }, { type: "image"}, { type: "file"}],
    },
    {
      name: "role",
      title: "Role",
      type: "string",
    },
    {
      name: "startDate",
      title: "Start Date",
      type: "date",
    },
    {
      name: "endDate",
      title: "End Date",
      type: "date",
    },
    {
      name: "callToAction",
      title: "Call To Action",
      type: "string",
      options: {
        list: [
          { title: "View Website", value: "View Website" },
          { title: "View Code", value: "View Code" },
          { title: "View Case Study", value: "View Case Study" },
          { title: "View Report", value: "View Report" },
        ]
      }
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "company",
        maxLength: 96,
      },
    }
  ],
};
