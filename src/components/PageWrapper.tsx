import clsx from "clsx";
import type { ComponentChildren } from "preact";

type PageWrapperProps = {
  class?: string;
  children: ComponentChildren;
  title: string | null;
};

export function PageWrapper(props: PageWrapperProps) {
  return (
    <div class={clsx("flex flex-col px-8 py-10", props.class)}>
      {props.title != null && (
        <h1 class="text-fg-strong text-2xl font-bold">{props.title}</h1>
      )}
      {props.children}
    </div>
  );
}
