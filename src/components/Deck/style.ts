import { animated } from "@react-spring/web";
import { styled } from "styled-components";

const Deck = styled(animated.div)`
  position: absolute;
  will-change: transform;

  display: grid;
  justify-content: center;
  align-items: center;

  touch-action: none;
  grid-template-columns: 1fr 1fr;
`;
const Card = styled(animated.div)`
  @media screen and (min-width: 470px) {
    width: calc(85vmin - 3rem);
    height: calc(85vmin - 3rem);
  }
  @media screen and (min-width: 600px) {
    width: calc(22rem + 12vmin);
    height: calc(22rem + 12vmin);
    box-shadow: 3px 7px 39px rgba(0, 0, 0, 0.32);
  }
  @media screen and (min-width: 1024px) {
    width: calc(20rem + 10vw);
    height: calc(20rem + 10vw);
    box-shadow: 0.25rem 0.5rem 3rem rgba(0, 0, 0, 0.32);
  }
  @media screen and (min-width: 1320px) {
    width: calc(20rem + 30vmin);
    height: calc(20rem + 30vmin);
  }

  cursor: grab;
  user-select: none;
  touch-action: none;
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: center center;

  will-change: transform;
  box-shadow: 2px 5px 27px rgba(0, 0, 0, 0.32);

  width: calc(85vmin - 3rem);
  height: calc(85vmin - 3rem);

  :active {
    cursor: grabbing;
  }
`;
export { Deck, Card };
