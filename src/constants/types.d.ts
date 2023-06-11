export type TColor = TThemeColor | string;
export type TThemeColor =
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

export type TFontWeight = "demilight" | "medium" | "bold";
export type TStyleName =
  | "hero"
  | "headline"
  | "subheadline"
  | "title"
  | "subtitle"
  | "body"
  | "caption"
  | "tooltip";

export type TNavContent = {
  path: string;
  label: string;
};
