import styled from "styled-components";
import { StackProps } from ".";

export const Stack = styled.div<StackProps>`
  width: 100%;
  display: flex;
  align-items: center;
  ${({ direction, spacing, padding, align, justify }) => ({
    flexDirection: direction || "column",
    gap: spacing || 0,
    padding: padding || 0,

    alignItems: align || "center",

    justifyContent: justify || "start",
  })}
`;
