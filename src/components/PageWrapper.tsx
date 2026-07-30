import { Column } from "@/components/core/Column";
import { TextBlock } from "@/components/core/TextBlock";
import clsx from "clsx";
import type { ComponentChildren } from "preact";

type PageWrapperProps = {
  class?: string;
  children: ComponentChildren;
  title: string | null;
};

export function PageWrapper(props: PageWrapperProps) {
  return (
    <Column
      class={clsx("not-desktop:pt-8 flex flex-col px-8 py-10", props.class)}
    >
      {props.title != null && (
        <TextBlock style="title">{props.title}</TextBlock>
      )}
      {props.children}
    </Column>
  );
}
