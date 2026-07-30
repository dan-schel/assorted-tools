import { Button } from "@/components/button/Button";
import { CopyToClipboardButton } from "@/components/CopyToClipboardButton";
import { Column } from "@/components/core/Column";
import { Grid } from "@/components/core/Grid";
import { TextBlock } from "@/components/core/TextBlock";
import { MingcuteRandomLine } from "@/components/icons/MingcuteRandomLine";
import { PageWrapper } from "@/components/PageWrapper";
import { repeat, uuid } from "@dan-schel/js-utils";
import clsx from "clsx";
import { useState } from "preact/hooks";

export default function Uuids() {
  return (
    <PageWrapper title="UUIDs">
      <Column class="mt-6 gap-8">
        <TextBlock>Generate random UUIDs (v4).</TextBlock>
        <Column class="gap-4">
          {repeat("", 1).map((_, i) => (
            <UuidValue key={i} />
          ))}
        </Column>
      </Column>
    </PageWrapper>
  );
}

type UuidValueProps = {
  class?: string;
};

function UuidValue(props: UuidValueProps) {
  const [currentUuid, setCurrentUuid] = useState(uuid());

  return (
    <Grid
      class={clsx(
        props.class,
        "border-soft-border max-w-240 grid-rows-[auto_auto] overflow-hidden rounded-sm border",
      )}
    >
      <Grid class="bg-bg-raised h-1" />
      <Grid class="grid-cols-[1fr_auto_auto] items-center gap-4 px-4">
        <TextBlock style="result-value" class="my-4 break-all">
          {currentUuid}
        </TextBlock>
        <Button
          icon={MingcuteRandomLine}
          onClick={() => setCurrentUuid(uuid())}
          theme="hover"
        />
        <CopyToClipboardButton value={currentUuid} />
      </Grid>
    </Grid>
  );
}
