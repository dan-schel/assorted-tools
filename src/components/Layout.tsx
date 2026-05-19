import clsx from "clsx";
import type { ComponentChildren } from "preact";
import { useState, useEffect } from "preact/hooks";
import { useLocation } from "preact-iso";
import { Sidebar } from "@/components/Sidebar";
import { MingcuteMenuLine } from "@/components/icons/MingcuteMenuLine";
import { TimesIcon } from "@/components/icons/TimesIcon";

type LayoutProps = {
  children: ComponentChildren;
};

export function Layout(props: LayoutProps) {
  const { path } = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    setSidebarOpen(false);
  }, [path]);

  return (
    <div class="widescreen:grid-cols-[96rem_1fr] grid min-h-svh">
      <div class="desktop:grid-cols-[20rem_1fr] grid">
        <div class="not-desktop:hidden col-1 grid py-10">
          <div class="border-soft-border grid border-e">
            <Sidebar />
          </div>
        </div>
        <div class="desktop:col-2 grid">{props.children}</div>
      </div>
    </div>
  );
}

type SidebarToggleButtonProps = {
  open: boolean;
  onToggle: () => void;
};

function SidebarToggleButton(props: SidebarToggleButtonProps) {
  return (
    <button
      type="button"
      class="text-fg hover:bg-soft-hover active:bg-soft-active flex items-center gap-2 rounded-sm px-2 py-1"
      onClick={props.onToggle}
    >
      {props.open ? (
        <TimesIcon class="text-lg" />
      ) : (
        <MingcuteMenuLine class="text-lg" />
      )}
      <span class="text-sm">{props.open ? "Close menu" : "Open menu"}</span>
    </button>
  );
}
