import { Button } from "@/components/button/Button";
import { CopyToClipboardButton } from "@/components/CopyToClipboardButton";
import { Column } from "@/components/core/Column";
import { Grid } from "@/components/core/Grid";
import { LinkText } from "@/components/core/LinkText";
import { TextPlaceholder } from "@/components/core/Placeholder";
import { TextBlock } from "@/components/core/TextBlock";
import { getTextBoxHeightRem } from "@/components/core/TextBoxTrim";
import { VerticalBleed } from "@/components/core/VerticalBleed";
import { MingcuteRefresh3Line } from "@/components/icons/MingcuteRefresh3Line";
import { PageWrapper } from "@/components/PageWrapper";
import clsx from "clsx";
import { useCallback, useEffect, useState } from "preact/hooks";

type IpAddressResult = {
  readonly ipv4: string | null;
  readonly ipv6: string | null;
};

export default function IpAddress() {
  const [result, setResult] = useState<IpAddressResult | null>(null);

  const triggerFetch = useCallback(() => {
    setResult(null);

    async function fetchData() {
      const result = await fetchIpAddress();
      setResult(result);
    }

    void fetchData();
  }, []);

  useEffect(() => {
    triggerFetch();
  }, [triggerFetch]);

  return (
    <PageWrapper title="IP Address">
      <TextBlock class="mt-6">
        Your current IP address(es), as detected by{" "}
        <LinkText href="https://www.ipify.org/">ipify.org</LinkText>:
      </TextBlock>
      <IpAddressValue
        class="mt-8"
        label="IPv4 address"
        value={result?.ipv4 ?? null}
        loading={result == null}
      />
      <IpAddressValue
        class="mt-4"
        label="IPv6 address"
        value={result?.ipv6 ?? null}
        loading={result == null}
      />
      <Button
        text="Refresh"
        icon={MingcuteRefresh3Line}
        onClick={triggerFetch}
        theme="outlined"
        class="mt-8 self-start"
      />
    </PageWrapper>
  );
}

type IpAddressValueProps = {
  readonly class?: string;
  readonly label: string;
  readonly value: string | null;
  readonly loading: boolean;
};

function IpAddressValue(props: IpAddressValueProps) {
  return (
    <Grid
      class={clsx(
        "border-soft-border max-w-240 grid-rows-[auto_auto_auto] overflow-hidden rounded-sm border",
        props.class,
      )}
    >
      <Grid class="bg-bg-raised h-1" />
      <Grid class="grid-cols-[1fr_auto] items-center gap-4 p-4">
        <Column class="gap-4" yAlign="center">
          <TextBlock style="small" class="select-none">
            {props.label}
          </TextBlock>
          {props.loading ? (
            <TextPlaceholder class="max-w-60 text-xl" />
          ) : props.value != null ? (
            <>
              <TextBlock style="result-value" class="break-all">
                {props.value}
              </TextBlock>
            </>
          ) : (
            <VerticalBleed heightRem={getTextBoxHeightRem("text-xl")}>
              <TextBlock style="weak">(Unavailable)</TextBlock>
            </VerticalBleed>
          )}
        </Column>
        {!props.loading && props.value != null && (
          <CopyToClipboardButton value={props.value} />
        )}
      </Grid>
    </Grid>
  );
}

async function fetchIpAddress() {
  const [ipv4, ipv6] = await Promise.all([
    fetchIpv4Address(),
    fetchIpv6Address(),
  ]);

  return { ipv4, ipv6 };
}

async function fetchIpv4Address() {
  try {
    const response = await fetch("https://api.ipify.org");
    return await response.text();
  } catch {
    return null;
  }
}

async function fetchIpv6Address() {
  try {
    const response = await fetch("https://api6.ipify.org");
    return await response.text();
  } catch {
    return null;
  }
}
