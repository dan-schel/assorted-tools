import clsx from "clsx";
import type { ComponentChildren } from "preact";

type PageWrapperProps = {
  class?: string;
  children: ComponentChildren;
};

export function PageWrapper(props: PageWrapperProps) {
  return (
    <div class={clsx("flex flex-col px-8 py-10", props.class)}>
      {props.children}
    </div>
  );
}
