import { OutlinedButtonHousing } from "@/components/button/housings/OutlinedButtonHousing";
import { Column } from "@/components/core/Column";
import { Grid } from "@/components/core/Grid";
import { Row } from "@/components/core/Row";
import { TextBlock } from "@/components/core/TextBlock";
import type { Icon } from "@/components/icons/type";
import { PageWrapper } from "@/components/PageWrapper";
import { toolGroups } from "@/tools";

export default function Home() {
  return (
    <PageWrapper title="assorted.tools">
      <Column class="mt-6 gap-12">
        <TextBlock>
          A collection of useful tools that work just the way I want, at a URL I
          can remember.
        </TextBlock>
        {toolGroups.map((group) => (
          <Column key={group.group} class="gap-4">
            <TextBlock>{group.group}</TextBlock>
            <Grid class="widescreen:grid-cols-3 max-w-240 items-stretch gap-4">
              {group.tools.map((route) => (
                <ToolButton
                  key={route.path}
                  href={route.path}
                  title={route.title}
                  description={route.description}
                  icon={route.icon}
                />
              ))}
            </Grid>
          </Column>
        ))}
      </Column>
    </PageWrapper>
  );
}

type ToolButtonProps = {
  href: string;
  title: string;
  description: string;
  icon: Icon;
};

function ToolButton(props: ToolButtonProps) {
  return (
    <OutlinedButtonHousing href={props.href} class="p-6">
      <Column class="gap-4">
        <Row class="gap-2" yAlign="center">
          <props.icon class="text-accent text-icon-mdlg" />
          <TextBlock style="strong">{props.title}</TextBlock>
        </Row>
        <TextBlock>{props.description}</TextBlock>
      </Column>
    </OutlinedButtonHousing>
  );
}
