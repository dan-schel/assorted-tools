import { Button } from "@/components/button/Button";
import { MingcuteAlertLine } from "@/components/icons/MingcuteAlertLine";
import { MingcuteCheckLine } from "@/components/icons/MingcuteCheckLine";
import { MingcuteCopy2Line } from "@/components/icons/MingcuteCopy2Line";
import { useCallback, useRef, useState } from "preact/hooks";

type CopyToClipboardButtonProps = {
  class?: string;
  value: string;
};

export function CopyToClipboardButton(props: CopyToClipboardButtonProps) {
  const [showCheck, setShowCheck] = useState(false);
  const [showError, setShowError] = useState(false);

  const timeoutRef = useRef<number | null>(null);

  const handleClick = useCallback(() => {
    async function run() {
      try {
        await navigator.clipboard.writeText(props.value);

        setShowCheck(true);
        setShowError(false);
      } catch {
        setShowCheck(false);
        setShowError(true);
      }

      if (timeoutRef.current != null) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setShowCheck(false);
        setShowError(false);
      }, 1000);
    }

    void run();
  }, [props.value, timeoutRef]);

  return (
    <Button
      class={props.class}
      icon={
        showCheck
          ? MingcuteCheckLine
          : showError
            ? MingcuteAlertLine
            : MingcuteCopy2Line
      }
      onClick={handleClick}
      theme="hover"
    />
  );
}
