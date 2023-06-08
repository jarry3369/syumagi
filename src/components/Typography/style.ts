import styled from "styled-components";
import { THighlightProps, TTextProps } from ".";

export const Text = styled.p<TTextProps>`
  letter-spacing: -0.02em;

  ${({ theme, color, align, styleName }) => ({
    color: theme.colors[color ? color : "#000000"],

    textAlign: align && align,
    textDecorationColor: theme.colors[color ? color : "#000000"],

    ...theme.fontStyle[styleName],
  })}
`;

export const Highlight = styled.span<THighlightProps>`
  color: ${({ theme, color }) => (color ? theme.colors[color] : {})};

  & > svg {
    vertical-align: middle;
  }
  ${({ theme, styleName }) => (styleName ? theme.fontStyle[styleName] : {})};
`;
