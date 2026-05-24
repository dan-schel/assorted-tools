import type { Icon } from "@/components/icons/types";
import { PageWrapper } from "@/components/PageWrapper";
import { toolGroups } from "@/tools";
import { Fragment } from "preact/jsx-runtime";

export default function Home() {
  return (
    <PageWrapper title="assorted.tools">
      <p class="text-fg mt-2 text-sm">
        A collection of useful tools that work just the way I want, at a URL I
        can remember.
      </p>
      {toolGroups.map((group) => (
        <Fragment key={group.group}>
          <p class="text-fg mt-12 text-sm">{group.group}</p>
          <div class="widescreen:grid-cols-3 mt-4 grid max-w-5xl items-stretch gap-4">
            {group.tools.map((route) => (
              <ToolButton
                key={route.path}
                href={route.path}
                title={route.title}
                description={route.description}
                icon={route.icon}
              />
            ))}
          </div>
        </Fragment>
      ))}
    </PageWrapper>
  );
}

type ToolButtonProps = {
  href: string;
  title: string;
  description: string;
  icon: Icon;
};

function ToolButton(props: ToolButtonProps) {
  return (
    <a
      href={props.href}
      class="border-soft-border hover:bg-soft-hover active:bg-soft-active flex flex-col gap-2 rounded-sm border p-5"
    >
      <div class="flex items-center gap-2">
        <props.icon class="text-accent text-base" />
        <span class="text-fg-strong text-sm font-bold">{props.title}</span>
      </div>
      <p class="text-fg text-sm">{props.description}</p>
    </a>
  );
}
