import clsx from "clsx";
import { toolGroups } from "@/tools";
import { useLocation } from "preact-iso";
import { MingcuteHome4Line } from "./icons/MingcuteHome4Line";
import type { Icon } from "./icons/type";
import { Fragment } from "preact/jsx-runtime";

type SidebarProps = {
  class?: string;
};

export function Sidebar(props: SidebarProps) {
  const { path } = useLocation();

  return (
    <div class={clsx(props.class, "flex flex-col gap-4 px-4")}>
      <p class="text-fg-strong self-center text-center text-xl font-bold">
        assorted.tools
      </p>
      <div class="flex flex-col">
        <SidebarButton
          href="/"
          title="Home"
          isActive={path === "/"}
          icon={MingcuteHome4Line}
        />
        {toolGroups.map((group) => (
          <Fragment key={group}>
            <p class="text-fg-weak mx-2 mt-8 mb-2 text-sm">{group.group}</p>
            {group.tools.map((route) => (
              <SidebarButton
                key={route.path}
                href={route.path}
                title={route.title}
                isActive={path === route.path}
                icon={route.icon}
              />
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

type SidebarButtonProps = {
  href: string;
  title: string;
  isActive: boolean;
  icon: Icon;
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
      <props.icon class="text-base" />
      <span>{props.title}</span>
    </a>
  );
}
