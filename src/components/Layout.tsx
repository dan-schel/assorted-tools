import type { ComponentChildren } from "preact";
import { useState, useEffect } from "preact/hooks";
import { useLocation } from "preact-iso";
import { Sidebar } from "@/components/Sidebar";
import clsx from "clsx";
import { MingcuteMenuLine } from "@/components/icons/MingcuteMenuLine";
import { MingcuteCloseLine } from "@/components/icons/MingcuteCloseLine";

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
    <div class="desktop:grid-cols-[16rem_1fr] not-desktop:grid-rows-[auto_1fr] relative grid min-h-svh">
      <div class="not-desktop:hidden border-soft-border fixed top-0 bottom-0 left-0 z-1 grid w-64 overflow-y-auto border-e py-8">
        <Sidebar />
      </div>

      <div class="desktop:hidden z-1 row-1 flex flex-row items-center gap-4 px-8 pt-8">
        <OpenMenuButton onClick={() => setSidebarOpen(true)} />
        <div
          class={clsx("fixed top-0 right-0 bottom-0 left-0", {
            hidden: !sidebarOpen,
          })}
          onClick={() => setSidebarOpen(false)}
        />
        <div
          class={clsx(
            "bg-bg-raised border-soft-border fixed top-0 bottom-0 left-0 flex w-64 flex-col overflow-y-scroll border-e pt-4 pb-8 transition-[translate,visibility,opacity] duration-100",
            { "invisible -translate-x-2 opacity-0": !sidebarOpen },
          )}
        >
          <CloseMenuButton
            class="mx-4 self-end"
            onClick={() => setSidebarOpen(false)}
          />
          <Sidebar class="mt-4" />
        </div>
      </div>

      <div class="desktop:col-2 not-desktop:row-2 z-0 grid">
        {props.children}
      </div>
    </div>
  );
}

type ToggleMenuButtonProps = {
  class?: string;
  onClick: () => void;
};

function OpenMenuButton(props: ToggleMenuButtonProps) {
  return (
    <button
      type="button"
      class={clsx(
        props.class,
        "text-fg hover:bg-soft-hover active:bg-soft-active border-soft-border flex h-8 items-center gap-2 rounded-sm border px-2",
      )}
      onClick={props.onClick}
    >
      <MingcuteMenuLine class="text-base" />
      <span class="text-sm">Open menu</span>
    </button>
  );
}

function CloseMenuButton(props: ToggleMenuButtonProps) {
  return (
    <button
      type="button"
      class={clsx(
        props.class,
        "text-fg hover:bg-soft-hover active:bg-soft-active flex h-8 w-8 items-center justify-center rounded-sm",
      )}
      onClick={props.onClick}
    >
      <MingcuteCloseLine class="text-base" />
    </button>
  );
}
