type TTypography = {
  children: string | ReactNode;
  /**
   * font-color  */
  color?: string;
  /** font-weight */
  weight?: TFontWeight;
  styleName: TStyleName;
  sx?: CSSProperties;
};
type TTextProps = TTypography & {
  align?: string;
};
type THighlightProps = Partial<TTypography>;
