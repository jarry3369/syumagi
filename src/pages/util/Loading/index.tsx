import * as S from "./style";

import Loop from "@/components/Loop";
import { Text } from "@/components/Typography";

import { loading_images, loading_comments } from "./constants";
import Stack from "@/components/Stack";

export const Loading = () => {
  const loadingContentRandomMapper = <T,>(content: Array<T>): T => {
    return content[Math.floor(Math.random() * content.length)];
  };

  return (
    <Stack spacing={"3rem"}>
      <S.Image src={loadingContentRandomMapper<string>(loading_images)} />
      <S.CommentWrapper direction="row" spacing={"2rem"} justify="center">
        <Text styleName="subheadline" weight="bold">
          {loadingContentRandomMapper<string>(loading_comments)}
        </Text>
        <Loop variant="three-dot-carousel" color="SG00" />
      </S.CommentWrapper>
    </Stack>
  );
};

export default Loading;
