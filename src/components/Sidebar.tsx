import clsx from "clsx";
import { toolGroups } from "@/tools";
import { useLocation } from "preact-iso";
import { MingcuteHome4Line } from "./icons/MingcuteHome4Line";
import type { Icon } from "./icons/type";
import { Column } from "@/components/core/Column";
import { TextBlock } from "@/components/core/TextBlock";
import { HoverButtonHousing } from "@/components/button/housings/HoverButtonHousing";
import { Row } from "@/components/core/Row";
import { SoftAccentButtonHousing } from "@/components/button/housings/SoftAccentButtonHousing";

type SidebarProps = {
  class?: string;
};

export function Sidebar(props: SidebarProps) {
  const { path } = useLocation();

  return (
    <Column class={clsx(props.class, "gap-8 px-4")}>
      <TextBlock style="title" align="center" class="self-center">
        assorted.tools
      </TextBlock>
      <Column class="gap-8">
        <SidebarButton
          href="/"
          title="Home"
          isActive={path === "/"}
          icon={MingcuteHome4Line}
        />
        {toolGroups.map((group) => (
          <Column key={group} class="gap-1">
            <TextBlock style="weak" class="mb-2 ml-2">
              {group.group}
            </TextBlock>
            {group.tools.map((route) => (
              <SidebarButton
                key={route.path}
                href={route.path}
                title={route.title}
                isActive={path === route.path}
                icon={route.icon}
              />
            ))}
          </Column>
        ))}
      </Column>
    </Column>
  );
}

type SidebarButtonProps = {
  href: string;
  title: string;
  isActive: boolean;
  icon: Icon;
};

function SidebarButton(props: SidebarButtonProps) {
  const Housing = props.isActive ? SoftAccentButtonHousing : HoverButtonHousing;

  return (
    <Housing href={props.href}>
      <Row class="h-8 gap-2 px-2" yAlign="center">
        <props.icon class="text-fg text-icon-mdlg" />
        <TextBlock style={props.isActive ? "strong" : "regular"}>
          {props.title}
        </TextBlock>
      </Row>
    </Housing>
  );
}
