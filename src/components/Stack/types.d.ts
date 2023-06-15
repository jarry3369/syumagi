type StackProps = {
  children: ReactNode;
  divider?: ReactNode;

  /** 식별자 이름 */
  name?: string;
  padding?: string | number;
  spacing?: string | number;
  direction?: "column-reverse" | "column" | "row-reverse" | "row";
  justify?:
    | "center"
    | "start"
    | "end"
    | "flex-end"
    | "flex-start"
    | "left"
    | "right"
    | "normal"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "stretch";
  align?:
    | "center"
    | "start"
    | "end"
    | "flex-end"
    | "flex-start"
    | "initial"
    | "inherit"
    | "revert"
    | "revert-layer"
    | "unset"
    | "baseline"
    | "stretch";
  sx?: CSSProperties;
};
