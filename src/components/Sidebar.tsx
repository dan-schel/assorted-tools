import clsx from "clsx";
import { toolRoutes } from "@/routes";
import { MingcuteToolLine } from "@/components/icons/MingcuteToolLine";

type SidebarProps = {
  class?: string;
  currentPath: string;
};

export function Sidebar(props: SidebarProps) {
  return (
    <nav
      class={clsx(
        props.class,
        "bg-bg-raised border-soft-border flex flex-col border-r",
        "lg:sticky lg:top-0 lg:h-svh",
      )}
    >
      <div class="flex flex-col overflow-y-auto py-6">
        <p class="text-fg-strong mb-4 px-4 text-sm font-bold">assorted.tools</p>
        <ul>
          {toolRoutes.map((route) => {
            const active = props.currentPath === route.path;
            return (
              <li key={route.path}>
                <a
                  href={route.path}
                  class={clsx(
                    "mx-2 flex h-8 items-center gap-2 rounded-sm px-2 text-sm",
                    "transition-colors duration-100",
                    active
                      ? "bg-soft-accent text-accent-text font-semibold"
                      : "text-fg hover:bg-soft-hover active:bg-soft-active",
                  )}
                >
                  <MingcuteToolLine class="shrink-0 text-base" />
                  <span class="truncate">{route.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
