import type { ComponentChildren } from "preact";
import { useState, useEffect } from "preact/hooks";
import { useLocation } from "preact-iso";
import { Sidebar } from "@/components/Sidebar";
import clsx from "clsx";
import { MingcuteMenuLine } from "@/components/icons/MingcuteMenuLine";
import { MingcuteCloseLine } from "@/components/icons/MingcuteCloseLine";
import { Button } from "@/components/button/Button";
import { Grid } from "@/components/core/Grid";
import { Row } from "@/components/core/Row";
import { Column } from "@/components/core/Column";

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
    <Grid class="desktop:grid-cols-[16rem_1fr] not-desktop:grid-rows-[auto_1fr] relative min-h-svh">
      <Grid class="not-desktop:hidden border-soft-border fixed top-0 bottom-0 left-0 z-1 w-64 overflow-y-auto border-e py-8">
        <Sidebar />
      </Grid>

      <Row class="desktop:hidden z-1 row-1 gap-4 px-8 pt-8" yAlign="center">
        <OpenMenuButton class="z-1" onClick={() => setSidebarOpen(true)} />
        <div
          class={clsx("fixed top-0 right-0 bottom-0 left-0 z-1", {
            hidden: !sidebarOpen,
          })}
          onClick={() => setSidebarOpen(false)}
        />
        <Column
          class={clsx(
            "bg-bg-raised border-soft-border fixed top-0 bottom-0 left-0 z-3 w-64 overflow-y-scroll border-e pt-4 pb-8 transition-[translate,visibility,opacity] duration-100",
            { "invisible -translate-x-2 opacity-0": !sidebarOpen },
          )}
        >
          <CloseMenuButton
            class="mx-4 self-end"
            onClick={() => setSidebarOpen(false)}
          />
          <Sidebar class="mt-4" />
        </Column>
      </Row>

      <div class="desktop:col-2 not-desktop:row-2 z-0 grid">
        {props.children}
      </div>
    </Grid>
  );
}

type ToggleMenuButtonProps = {
  class?: string;
  onClick: () => void;
};

function OpenMenuButton(props: ToggleMenuButtonProps) {
  return (
    <Button
      class={props.class}
      theme="outlined"
      icon={MingcuteMenuLine}
      text="Open menu"
      onClick={props.onClick}
    />
  );
}

function CloseMenuButton(props: ToggleMenuButtonProps) {
  return (
    <Button
      class={props.class}
      theme="hover"
      icon={MingcuteCloseLine}
      onClick={props.onClick}
    />
  );
}
