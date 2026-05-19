import { toolRoutes } from "@/routes";
import { MingcuteToolLine } from "@/components/icons/MingcuteToolLine";

export default function Home() {
  return (
    <div class="px-8 py-10">
      <div class="mb-10">
        <h1 class="text-fg-strong text-2xl font-bold">assorted.tools</h1>
        <p class="text-fg mt-2 text-sm">
          A collection of useful tools that work just the way I want, at a URL I
          can remember.
        </p>
      </div>
      <ul class="desktop:grid-cols-3 grid items-stretch gap-4">
        {toolRoutes.map((route) => (
          <li key={route.path} class="grid">
            <a
              href={route.path}
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
          </li>
        ))}
      </ul>
    </div>
  );
}
