import styled from "styled-components";
import { DividerProps } from ".";

export const Divider = styled.div<DividerProps>`
  top: 0;
  ${({ theme, vertical, color }) => ({
    width: vertical ? "1px" : "100%",
    height: vertical ? "100%" : "1px",
    backgroundColor: color ? theme.colors[color] : theme.colors.SG08,
  })}
`;
