type ToolRoute = {
  path: string;
  title: string;
  description: string;
};

export const toolRoutes: ToolRoute[] = [
  {
    path: "/time-zones",
    title: "Time zones",
    description:
      "Convert ISO8601 formatted times, human formatted times, or Unix timestamps between timezones.",
  },
  {
    path: "/symbols",
    title: "Symbols",
    description:
      "A list of commonly used symbols (along with their HTML codes), ready to copy and paste.",
  },
  {
    path: "/uuids",
    title: "UUIDs",
    description: "Generate random UUIDs.",
  },
];
