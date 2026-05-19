import clsx from "clsx";
import { toolRoutes } from "@/routes";
import { MingcuteToolLine } from "@/components/icons/MingcuteToolLine";
import { useLocation } from "preact-iso";

type SidebarProps = {
  class?: string;
};

export function Sidebar(props: SidebarProps) {
  const { path } = useLocation();

  return (
    <div class="flex flex-col gap-4 overflow-y-auto px-4">
      <div class="flex flex-col gap-2">
        <SidebarButton href="/" title="Home" isActive={path === "/"} />
        {toolRoutes.map((route) => (
          <SidebarButton
            key={route.path}
            href={route.path}
            title={route.title}
            isActive={path === route.path}
          />
        ))}
      </div>
    </div>
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
        "flex h-8 items-center gap-2 rounded-sm px-2 text-sm",
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
