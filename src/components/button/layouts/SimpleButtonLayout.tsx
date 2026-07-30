import type { ComponentChildren } from "preact";
import { Row } from "@/components/core/Row";
import { TextBlock } from "@/components/core/TextBlock";
import type { Icon } from "@/components/icons/type";
import clsx from "clsx";

type SimpleButtonLayoutProps = {
  class?: string;
  icon?: Icon;
  text?: ComponentChildren;
};

export function SimpleButtonLayout(props: SimpleButtonLayoutProps) {
  return (
    <Row
      class={clsx(props.class, "h-8 gap-2", {
        "px-4": props.text != null,
        "min-w-8": props.text == null,
      })}
      yAlign="center"
      xAlign="center"
    >
      {props.icon != null && <props.icon class="text-fg text-icon-lg" />}
      {props.text != null && <TextBlock>{props.text}</TextBlock>}
    </Row>
  );
}
