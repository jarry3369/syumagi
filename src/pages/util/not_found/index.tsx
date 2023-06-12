import { Fragment } from "react";
import { Link } from "react-router-dom";

import * as S from "./style";

import Stack from "@/components/Stack";
import { Highlight } from "@/components/Typography";

import imgLogo from "@/assets/image/syumagi_mascot.png";

export const NotFound = () => {
  console.log(navigator.language);
  return (
    <Stack padding={"20px 0"}>
      <Fragment>
        <S.Image src={imgLogo} />
        <S.Text styleName="hero" weight="bold">
          404 NOT FOUND
          <br />
          <Highlight styleName="subtitle" weight="demilight">
            요청하신 페이지를 찾을 수 없습니다.
          </Highlight>
        </S.Text>
      </Fragment>
      <Link to={"/"} replace>
        <button>돌아가기</button>
      </Link>
    </Stack>
  );
};

export default NotFound;
