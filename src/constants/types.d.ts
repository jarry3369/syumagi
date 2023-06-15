type TColor = TThemeColor | string;
type TThemeColor =
  | "SC01"
  | "SG00"
  | "SG01"
  | "SG01_1"
  | "SG02"
  | "SG02_1"
  | "SG03"
  | "SG04"
  | "SG05"
  | "SG05_1"
  | "SG06"
  | "SG07"
  | "SG08"
  | "SG09";

type TFontWeight = "demilight" | "medium" | "bold";
type TStyleName =
  | "hero"
  | "headline"
  | "subheadline"
  | "title"
  | "subtitle"
  | "body"
  | "caption"
  | "tooltip";

type TNavContent = {
  path: string;
  label: string;
};
