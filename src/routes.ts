type ToolRoute = {
  path: string;
  title: string;
  description: string;
};

export const toolRoutes: ToolRoute[] = [
  {
    path: "/time-zones",
    title: "Time Zones",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    path: "/symbols",
    title: "Symbols",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    path: "/uuids",
    title: "UUIDs",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

export function getPageTitle(pathname: string): string | null {
  const route = toolRoutes.find((r) => r.path === pathname);
  return route?.title ?? null;
}
