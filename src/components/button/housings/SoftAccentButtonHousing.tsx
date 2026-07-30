import type { ComponentChildren } from "preact";
import { Clickable } from "@/components/core/Clickable";
import clsx from "clsx";
import { ContentOrSpinner } from "@/components/button/ContentOrSpinner";

type SoftAccentButtonHousingProps = {
  class?: string;
  children?: ComponentChildren;
  onClick?: () => void;
  href?: string;
  onHrefClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  rounded?: boolean;
};

const parentStylesArr = [
  "relative",
  "group",

  "not-disabled:[--color-fg:var(--color-accent-text)]",
  "not-disabled:[--color-fg-strong:var(--color-accent-text)]",
  "not-disabled:[--color-fg-weak:var(--color-accent-text)]",
  "disabled:[--color-fg:var(--color-fg-weak)]",
  "disabled:[--color-fg-strong:var(--color-fg-weak)]",
];
const parentStyles = clsx(parentStylesArr);

const backgroundStylesArr = [
  "absolute",

  "z-0",
  "top-0",
  "bottom-0",
  "left-0",
  "right-0",

  "group-not-disabled:bg-soft-accent",
];
const backgroundStyles = clsx(backgroundStylesArr);

export function SoftAccentButtonHousing(props: SoftAccentButtonHousingProps) {
  const rounded = props.rounded ?? true;

  return (
    <Clickable
      class={clsx(props.class, parentStyles)}
      onClick={props.onClick}
      href={props.href}
      onHrefClick={props.onHrefClick}
      disabled={(props.disabled ?? false) || (props.loading ?? false)}
    >
      <div class={clsx(backgroundStyles, { "rounded-sm": rounded })} />
      <ContentOrSpinner class="z-1" loading={props.loading ?? false}>
        {props.children}
      </ContentOrSpinner>
    </Clickable>
  );
}
