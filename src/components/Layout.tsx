import clsx from "clsx";
import type { ComponentChildren } from "preact";
import { useState, useEffect } from "preact/hooks";
import { useLocation } from "preact-iso";
import { getPageTitle } from "@/routes";
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

  const pageTitle = getPageTitle(path);

  return (
    <div
      class={clsx(
        "min-h-svh",
        "grid grid-cols-[1fr] [grid-template-areas:'main']",
        "desktop:grid-cols-[16rem_1fr] desktop:[grid-template-areas:'sidebar_main']",
      )}
    >
      {/* Backdrop (mobile only) */}
      <div
        class={clsx(
          "fixed inset-0 z-10 bg-black/50 transition-[opacity,visibility] duration-200",
          sidebarOpen ? "visible opacity-100" : "invisible opacity-0",
        )}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <Sidebar
        class={clsx(
          "desktop:[grid-area:sidebar] z-20",
          "max-desktop:fixed max-desktop:top-0 max-desktop:left-0 max-desktop:h-full",
          "max-desktop:w-[min(calc(100vw-3rem),15rem)]",
          "max-desktop:shadow-sidebar max-desktop:transition-[translate,opacity,visibility] max-desktop:duration-200",
          sidebarOpen
            ? "max-desktop:visible max-desktop:translate-x-0 max-desktop:opacity-100"
            : "max-desktop:invisible max-desktop:-translate-x-full max-desktop:opacity-0",
        )}
        currentPath={path}
      />

      {/* Main */}
      <main class="flex flex-col [grid-area:main]">
        {/* Mobile header */}
        <header
          class={clsx(
            "desktop:hidden sticky top-0 z-5",
            "bg-bg-raised border-soft-border flex flex-col border-b",
          )}
        >
          <div class="flex h-12 items-center px-3">
            <button
              type="button"
              class="text-fg hover:bg-soft-hover active:bg-soft-active flex items-center gap-2 rounded-sm px-2 py-1"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label={sidebarOpen ? "Close menu" : "Open menu"}
            >
              {sidebarOpen ? (
                <TimesIcon class="text-lg" />
              ) : (
                <MingcuteMenuLine class="text-lg" />
              )}
              <span class="text-sm">
                {sidebarOpen ? "Close menu" : "Open menu"}
              </span>
            </button>
          </div>
          {pageTitle != null && (
            <div class="flex h-10 items-center px-5">
              <span class="text-fg-weak text-sm">assorted.tools</span>
              <span class="text-fg-weak px-2 text-sm">/</span>
              <span class="text-accent-text text-sm font-bold">
                {pageTitle}
              </span>
            </div>
          )}
        </header>

        <div class="flex-1">{props.children}</div>
      </main>
    </div>
  );
}
