import { Button } from "@/components/button/Button";
import { Column } from "@/components/core/Column";
import { TextBlock } from "@/components/core/TextBlock";
import { MingcuteHome4Line } from "@/components/icons/MingcuteHome4Line";
import { PageWrapper } from "@/components/PageWrapper";

export default function NotFound() {
  return (
    <PageWrapper title={null} xAlign="center" yAlign="center">
      <Column class="gap-8" xAlign="center" yAlign="center">
        <TextBlock style="title" align="center">
          Page not found
        </TextBlock>
        <TextBlock align="center">
          This page doesn't exist, at least not anymore!
        </TextBlock>
        <Button href="/" text="Go home" icon={MingcuteHome4Line} />
      </Column>
    </PageWrapper>
  );
}
