import { useReducer } from "react";

import { Deck_Reducer, Deck_States } from "@/components/Deck/reducer";

import Deck from "@/components/Deck";
import Stack from "@/components/Stack";
import { Highlight, Text } from "@/components/Typography";

import * as S from "./style";

const AlbumSlider = () => {
  const [_state, _dispatch] = useReducer(Deck_Reducer, Deck_States);
  // const { data: albums } = useSWR("album", getAlbums, {});
  // AWS 과금 해결 후에 복구
  const albums: Array<{
    cover: string;
    releaseDate: string;
    title: string;
    type: string;
  }> = [
    {
      title: "【謝罪】お話ししたいことがあります。",
      type: "single",
      releaseDate: "2022-11-25",
      cover:
        "https://syumagi.s3.ap-northeast-2.amazonaws.com/image/cover/%E3%80%90%E8%AC%9D%E7%BD%AA%E3%80%91%E3%81%8A%E8%A9%B1%E3%81%97%E3%81%97%E3%81%9F%E3%81%84%E3%81%93%E3%81%A8%E3%81%8C%E3%81%82%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82.webp",
    },
    {
      title: "なりたいわ",
      type: "single",
      releaseDate: "2022-11-25",
      cover:
        "https://syumagi.s3.ap-northeast-2.amazonaws.com/image/cover/%E3%81%AA%E3%82%8A%E3%81%9F%E3%81%84%E3%82%8F.webp",
    },
    {
      title: "オンリーナイト",
      type: "single",
      releaseDate: "2023-05-31",
      cover:
        "https://syumagi.s3.ap-northeast-2.amazonaws.com/image/cover/%E3%82%AA%E3%83%B3%E3%83%AA%E3%83%BC%E3%83%8A%E3%82%A4%E3%83%88.webp",
    },
    {
      title: "ドッペルゲンガー",
      type: "single",
      releaseDate: "2023-02-24",
      cover:
        "https://syumagi.s3.ap-northeast-2.amazonaws.com/image/cover/%E3%83%89%E3%83%83%E3%83%9A%E3%83%AB%E3%82%B2%E3%83%B3%E3%82%AC%E3%83%BC.webp",
    },
    {
      title: "バッデイ、グッバイ。",
      type: "single",
      releaseDate: "2022-06-24",
      cover:
        "https://syumagi.s3.ap-northeast-2.amazonaws.com/image/cover/%E3%83%90%E3%83%83%E3%83%87%E3%82%A4%E3%80%81%E3%82%B0%E3%83%83%E3%83%90%E3%82%A4%E3%80%82.webp",
    },
    {
      title: "ユナイト",
      type: "single",
      releaseDate: "2021-12-26",
      cover:
        "https://syumagi.s3.ap-northeast-2.amazonaws.com/image/cover/%E3%83%A6%E3%83%8A%E3%82%A4%E3%83%88.webp",
    },

    {
      title: "余白の世界の1ページ",
      type: "EP",
      releaseDate: "2023-03-15",
      cover:
        "https://syumagi.s3.ap-northeast-2.amazonaws.com/image/cover/%E4%BD%99%E7%99%BD%E3%81%AE%E4%B8%96%E7%95%8C%E3%81%AE1%E3%83%9A%E3%83%BC%E3%82%B8.webp",
    },

    {
      title: "六畳人間",
      type: "single",
      releaseDate: "2021-08-06",
      cover:
        "https://syumagi.s3.ap-northeast-2.amazonaws.com/image/cover/%E5%85%AD%E7%95%B3%E4%BA%BA%E9%96%93.webp",
    },
    {
      title: "真実通過",
      type: "single",
      releaseDate: "2022-10-07",
      cover:
        "https://syumagi.s3.ap-northeast-2.amazonaws.com/image/cover/%E7%9C%9F%E5%AE%9F%E9%80%9A%E9%81%8E.webp",
    },
    {
      title: "逃避 行",
      type: "single",
      releaseDate: "2021-09-17",
      cover:
        "https://syumagi.s3.ap-northeast-2.amazonaws.com/image/cover/%E9%80%83%E9%81%BF+%E8%A1%8C.webp",
    },
    {
      title: "隠レ陰キャ",
      type: "single",
      releaseDate: "2022-09-12",
      cover:
        "https://syumagi.s3.ap-northeast-2.amazonaws.com/image/cover/%E9%9A%A0%E3%83%AC%E9%99%B0%E3%82%AD%E3%83%A3.webp",
    },
  ];

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
