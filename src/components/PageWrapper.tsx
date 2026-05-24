import clsx from "clsx";
import type { ComponentChildren } from "preact";

type PageWrapperProps = {
  class?: string;
  children: ComponentChildren;
  title: string | null;
};

export function PageWrapper(props: PageWrapperProps) {
  return (
    <div class={clsx("not-desktop:pt-8 flex flex-col px-8 py-10", props.class)}>
      {props.title != null && (
        <p class="text-fg-strong text-2xl font-bold">{props.title}</p>
      )}
      {props.children}
    </div>
  );
}
