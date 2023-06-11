import styled from "styled-components";
import { TFontWeight } from "@/constants/types";
import { THighlightProps, TTextProps } from ".";

const font_weight_mapper: { [key in TFontWeight]: number } = {
  demilight: 300,
  medium: 500,
  bold: 700,
};
export const Text = styled.p<TTextProps>`
  letter-spacing: -0.02em;

  ${({ theme, color, align, weight, styleName }) => ({
    color: theme.colors[color ? color : "#000000"],

    textAlign: align && align,
    textDecorationColor: theme.colors[color ? color : "#000000"],

    fontWeight: font_weight_mapper[weight!],
    ...theme.fontStyle[styleName],
  })}
`;

export const Highlight = styled.span<THighlightProps>`
  ${({ theme, color, weight }) => ({
    color: theme.colors[color ? color : "#000000"],
    fontWeight: font_weight_mapper[weight!],
  })}

  ${({ theme, styleName }) => styleName && theme.fontStyle[styleName]}
`;
