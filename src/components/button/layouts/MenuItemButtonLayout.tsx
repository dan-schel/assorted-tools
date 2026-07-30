import type { ComponentChildren } from "preact";
import { Row } from "@/components/core/Row";
import { TextBlock } from "@/components/core/TextBlock";
import type { Icon } from "@/components/icons/type";
import clsx from "clsx";

type MenuItemButtonLayoutProps = {
  class?: string;
  icon?: Icon;
  text?: ComponentChildren;
  outerPadding?: boolean;
};

export function MenuItemButtonLayout(props: MenuItemButtonLayoutProps) {
  const outerPadding = props.outerPadding ?? false;

  return (
    <Row
      class={clsx(props.class, "min-w-0 gap-2 py-2", {
        "px-4": props.text != null,
        "min-w-8": props.text == null,
        "min-h-10": !outerPadding,
        "min-h-12": outerPadding,
      })}
      yAlign="center"
    >
      {props.icon != null && <props.icon class="text-fg text-icon-lg" />}
      {props.text != null && (
        <TextBlock class="min-w-0 shrink">{props.text}</TextBlock>
      )}
    </Row>
  );
}
