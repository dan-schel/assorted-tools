import { MingcuteTimeLine } from "./components/icons/MingcuteTimeLine";
import { MingcuteFormulaLine } from "./components/icons/MingcuteFormulaLine";
import { MingcuteRandomLine } from "./components/icons/MingcuteRandomLine";
import { MingcuteCodeLine } from "./components/icons/MingcuteCodeLine";
import type { Icon } from "./components/icons/types";
import { IconamoonNumber2Square } from "@/components/icons/IconamoonNumber2Square";
import { TablerBallTennis } from "@/components/icons/TablerBallTennis";
import { MingcuteCashLine } from "@/components/icons/MingcuteCashLine";
import { unique } from "@dan-schel/js-utils";
import { MingcutePaletteLine } from "@/components/icons/MingcutePaletteLine";
import { MingcuteCalendarLine } from "@/components/icons/MingcuteCalendarLine";

type Tool = {
  readonly title: string;
  readonly path: string;
  readonly icon: Icon;
  readonly description: string;
  readonly group: string | null;
};

type ToolGroup = {
  readonly group: string;
  readonly tools: readonly Tool[];
};

const tools: readonly Tool[] = [
  {
    title: "Time zones",
    path: "/time-zones",
    icon: MingcuteTimeLine,
    description:
      "Convert ISO8601 formatted times, human formatted times, or Unix timestamps between timezones.",
    group: null,
  },
  {
    title: "Symbols",
    path: "/symbols",
    icon: MingcuteFormulaLine,
    description:
      "A list of commonly used symbols (along with their HTML codes), ready to copy and paste.",
    group: null,
  },
  {
    title: "UUIDs",
    path: "/uuids",
    icon: MingcuteRandomLine,
    description: "Generate random UUIDs.",
    group: null,
  },
  {
    title: "Escaping strings",
    path: "/escaping-strings",
    icon: MingcuteCodeLine,
    description: "Convert escaped strings to unescaped strings and vice versa.",
    group: null,
  },
  {
    title: "Colour formats",
    path: "/color-formats",
    icon: MingcutePaletteLine,
    description: "Convert colours to and from RGB and HSL.",
    group: null,
  },
  {
    title: "Uni timetables",
    path: "/uni-timetables",
    icon: MingcuteCalendarLine,
    description: "Visualise different timeslots for each class.",
    group: null,
  },
  {
    title: "Generic",
    path: "/generic-scores",
    icon: IconamoonNumber2Square,
    description:
      "Track a number for each player which can be incremented and decremented.",
    group: "Scoreboards",
  },
  {
    title: "Tennis",
    path: "/tennis-scores",
    icon: TablerBallTennis,
    description: "Track points, games, sets, faults, and serving direction.",
    group: "Scoreboards",
  },
  {
    title: "Monopoly",
    path: "/monopoly-scores",
    icon: MingcuteCashLine,
    description: "Track money and calculate mortgages.",
    group: "Scoreboards",
  },
];

export const toolGroups: readonly ToolGroup[] = unique(
  tools.map((t) => t.group),
)
  .map((g) => ({
    group: g,
    tools: tools
      .filter((t) => t.group === g)
      .sort((a, b) => a.title.localeCompare(b.title)),
  }))
  .sort((a, b) => {
    // Ungrouped tools are grouped first.
    if (a.group === null) return -1;
    if (b.group === null) return 1;

    return a.group.localeCompare(b.group);
  })
  .map((group) => ({
    ...group,
    group: group.group ?? "Tools",
  }));
