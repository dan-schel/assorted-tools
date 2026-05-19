import { toolRoutes } from "@/routes";
import { MingcuteToolLine } from "@/components/icons/MingcuteToolLine";
import { PageWrapper } from "@/components/PageWrapper";

export default function Home() {
  return (
    <PageWrapper title="assorted.tools">
      <p class="text-fg mt-2 text-sm">
        A collection of useful tools that work just the way I want, at a URL I
        can remember.
      </p>
      <div class="desktop:grid-cols-3 mt-8 grid items-stretch gap-4">
        {toolRoutes.map((route) => (
          <ToolButton
            key={route.path}
            href={route.path}
            title={route.title}
            description={route.description}
          />
        ))}
      </div>
    </PageWrapper>
  );
}

type ToolButtonProps = {
  href: string;
  title: string;
  description: string;
};

function ToolButton(props: ToolButtonProps) {
  return (
    <a
      href={props.href}
      class="border-soft-border hover:bg-soft-hover active:bg-soft-active flex flex-col gap-4 rounded-sm border p-5"
    >
      <div class="flex items-center gap-2">
        <MingcuteToolLine class="text-accent text-base" />
        <span class="text-fg-strong text-sm font-semibold">{props.title}</span>
      </div>
      <p class="text-fg text-sm">{props.description}</p>
    </a>
  );
}
