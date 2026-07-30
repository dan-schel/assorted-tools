import type { ComponentChildren } from "preact";
import type { Icon } from "@/components/icons/type";
import { AccentButtonHousing } from "@/components/button/housings/AccentButtonHousing";
import { SimpleButtonLayout } from "@/components/button/layouts/SimpleButtonLayout";
import { DefaultButtonHousing } from "@/components/button/housings/DefaultButtonHousing";
import { OutlinedButtonHousing } from "@/components/button/housings/OutlinedButtonHousing";
import { HoverButtonHousing } from "@/components/button/housings/HoverButtonHousing";
import { HoverSquareButtonHousing } from "@/components/button/housings/HoverSquareButtonHousing";
import { MenuItemButtonLayout } from "@/components/button/layouts/MenuItemButtonLayout";
import { ErrorButtonHousing } from "@/components/button/housings/ErrorButtonHousing";
import { WarningButtonHousing } from "@/components/button/housings/WarningButtonHousing";
import { SuccessButtonHousing } from "@/components/button/housings/SuccessButtonHousing";

const themes = {
  "default": DefaultButtonHousing,
  "accent": AccentButtonHousing,
  "outlined": OutlinedButtonHousing,
  "hover": HoverButtonHousing,
  "hover-square": HoverSquareButtonHousing,
  "error": ErrorButtonHousing,
  "warning": WarningButtonHousing,
  "success": SuccessButtonHousing,
};
const layouts = {
  "simple": SimpleButtonLayout,
  "menu-item": MenuItemButtonLayout,
};

type ButtonProps = {
  class?: string;
  onClick?: () => void;
  href?: string;
  onHrefClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  icon?: Icon;
  text?: ComponentChildren;
  theme?: keyof typeof themes;
  layout?: keyof typeof layouts;
};

export function Button(props: ButtonProps) {
  const Theme = themes[props.theme ?? "default"];
  const Layout = layouts[props.layout ?? "simple"];

  return (
    <Theme
      class={props.class}
      onClick={props.onClick}
      href={props.href}
      onHrefClick={props.onHrefClick}
      disabled={props.disabled}
      loading={props.loading}
    >
      <Layout icon={props.icon} text={props.text} />
    </Theme>
  );
}
