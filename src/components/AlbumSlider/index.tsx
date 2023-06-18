import { useReducer } from "react";
import useSWR from "swr";

import { getAlbums } from "@/api";
import { Deck_Reducer, Deck_States } from "@/components/Deck/reducer";

import Deck from "@/components/Deck";
import Stack from "@/components/Stack";
import { Highlight, Text } from "@/components/Typography";

import * as S from "./style";

const AlbumSlider = () => {
  const [_state, _dispatch] = useReducer(Deck_Reducer, Deck_States);
  const { data: albums } = useSWR("album", getAlbums, {});

  return (
    <S.AlbumSliderContainer className="sc_padding">
      <S.DeckContentWrapper>
        <Stack
          align="flex-start"
          spacing={6}
          sx={{ width: "40vmin", maxHeight: "14vmin" }}
        >
          <Text styleName="subheadline" weight="bold" align="start">
            {albums
              ?.at(albums.length - _state.gone.size - 1)
              ?.type.toLocaleUpperCase()}
            <br />
            <Highlight styleName="hero">
              {albums?.at(albums.length - _state.gone.size - 1)?.title}
            </Highlight>
          </Text>
        </Stack>
        <S.DeckWrapper>
          <Deck
            items={albums?.map((d) => d.cover) ?? []}
            {...{ _state, _dispatch }}
          />
        </S.DeckWrapper>
      </S.DeckContentWrapper>

      <Stack direction="row" justify="space-between">
        <Stack align="start" spacing={4} sx={{ width: "max-content" }}>
          <Text styleName="title">
            {`${
              _state.gone.size >= (albums?.length ?? 0)
                ? albums?.length ?? 0
                : _state.gone.size + 1
            }`.padStart(2, "0")}
            ---
            {`${albums?.length}`.padStart(2, "0")}
          </Text>
        </Stack>

        <Stack direction="row" sx={{ width: "max-content" }}>
          <Text styleName="title">SCROLL DOWN</Text>
          <div
            style={{
              marginLeft: "0.75rem",
            }}
          >{`>`}</div>
        </Stack>
      </Stack>
    </S.AlbumSliderContainer>
  );
};

export default AlbumSlider;
