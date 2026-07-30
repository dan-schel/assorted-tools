import clsx from "clsx";
import type { ComponentChildren } from "preact";

type VerticalBleedProps = {
  class?: string;
  children?: ComponentChildren;
  heightRem: number;
};

export function VerticalBleed(props: VerticalBleedProps) {
  return (
    <div
      class={clsx(props.class, "flex flex-col items-stretch justify-center")}
      style={{ height: `${props.heightRem}rem` }}
    >
      {props.children}
    </div>
  );
}
