import styled, { keyframes } from "styled-components";
import theme from "@/constants/theme";

const dotCarousel = (props: Pick<LoopProps, "color">) => {
  const color = theme.colors[props.color];
  return keyframes`
    0% {
      box-shadow: 9975px 0 0 -1px ${color}, 9999px 0 0 3px ${color},
        10023px 0 0 -1px ${color};
    }
    50% {
      box-shadow: 10023px 0 0 -1px ${color}, 9975px 0 0 -1px ${color},
        9999px 0 0 3px ${color};
    }
    100% {
      box-shadow: 9999px 0 0 3px ${color}, 10023px 0 0 -1px ${color},
        9975px 0 0 -1px ${color};
    }
`;
};
const threeDotCarousel = styled.div<Pick<LoopProps, "color">>`
  width: 10px;
  height: 10px;
  border-radius: 5px;

  position: relative;
  left: -9999px;
  animation: ${(color) => dotCarousel({ ...color })} 1.8s infinite linear;

  ${({ theme, color }) => ({
    boxShadow: `9984px 0 0 0 ${theme.colors[color]}, 9999px 0 0 0 ${theme.colors[color]}, 10014px 0 0 0 ${theme.colors[color]}`,
  })}
`;

export { threeDotCarousel };
