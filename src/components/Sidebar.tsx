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
        "desktop:sticky desktop:top-0 desktop:h-svh",
      )}
    >
      <div class="flex flex-col overflow-y-auto py-6">
        <p class="text-fg-strong mb-4 px-4 font-bold">assorted.tools</p>
        <div class="flex flex-col gap-1">
          <SidebarButton
            href="/"
            title="Home"
            isActive={props.currentPath === "/"}
          />
          {toolRoutes.map((route) => (
            <SidebarButton
              key={route.path}
              href={route.path}
              title={route.title}
              isActive={props.currentPath === route.path}
            />
          ))}
        </div>
      </div>
    </nav>
  );
}

type SidebarButtonProps = {
  href: string;
  title: string;
  isActive: boolean;
};

function SidebarButton(props: SidebarButtonProps) {
  return (
    <a
      href={props.href}
      class={clsx(
        "mx-2 flex h-8 items-center gap-2 rounded-sm px-2 text-sm",
        props.isActive
          ? "bg-soft-accent text-accent-text font-bold"
          : "text-fg hover:bg-soft-hover active:bg-soft-active",
      )}
    >
      <MingcuteToolLine class="text-base" />
      <span>{props.title}</span>
    </a>
  );
}
