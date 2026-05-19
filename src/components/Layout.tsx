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
    <div class="not-widescreen:grid-cols-[0_1fr_0] widescreen:grid-cols-[1fr_64rem_1fr] grid min-h-svh">
      <div class="desktop:grid-cols-[16rem_1fr] col-2 grid grid-rows-[auto_1fr]">
        <div class="col-span-2 row-1 ps-4 pe-8">
          <div class="border-soft-border grid border-b pt-8 pb-4">
            <h1 class="text-fg-strong text-2xl font-bold">assorted.tools</h1>
          </div>
        </div>
        <div class="col-1 row-2 grid">
          <div class="border-soft-border grid border-e py-10">
            <Sidebar />
          </div>
        </div>
        <div class="col-2 row-2 grid">{props.children}</div>
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
