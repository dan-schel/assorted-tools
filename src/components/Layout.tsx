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
        "lg:grid-cols-[240px_1fr] lg:[grid-template-areas:'sidebar_main']",
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
          "z-20 lg:[grid-area:sidebar]",
          "max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:h-full",
          "max-lg:w-[min(calc(100vw-3rem),15rem)]",
          "max-lg:shadow-sidebar max-lg:transition-[translate,opacity,visibility] max-lg:duration-200",
          sidebarOpen
            ? "max-lg:visible max-lg:translate-x-0 max-lg:opacity-100"
            : "max-lg:invisible max-lg:-translate-x-full max-lg:opacity-0",
        )}
        currentPath={path}
      />

      {/* Main */}
      <main class="flex flex-col [grid-area:main]">
        {/* Mobile header */}
        <header
          class={clsx(
            "sticky top-0 z-5 lg:hidden",
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
