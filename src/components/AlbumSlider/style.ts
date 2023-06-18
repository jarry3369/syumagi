import { styled } from "styled-components";

const AlbumSliderContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr max-content;
  grid-auto-flow: dense;

  width: 100%;
  height: 100%;

  background-color: tomato;
`;

const DeckContentWrapper = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;

  grid-column-gap: 8rem;
  align-content: center;
  justify-content: center;

  width: 100%;
  max-width: 112.5rem;
  height: 100%;

  margin: 0 auto;
`;

const DeckWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export { AlbumSliderContainer, DeckContentWrapper, DeckWrapper };
