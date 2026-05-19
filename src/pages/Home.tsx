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
          <a
            href={route.path}
            key={route.path}
            class="border-soft-border hover:bg-soft-hover active:bg-soft-active flex flex-col gap-3 rounded-sm border p-5"
          >
            <div class="text-accent flex items-center gap-2">
              <MingcuteToolLine class="text-base" />
              <span class="text-fg-strong text-sm font-semibold">
                {route.title}
              </span>
            </div>
            <p class="text-fg text-sm">{route.description}</p>
          </a>
        ))}
      </div>
    </PageWrapper>
  );
}
