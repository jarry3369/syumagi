import { IStyledComponent } from "styled-components";

import * as S from "./style";
import { TThemeColor } from "@/constants/types";

type LoopVariant = "three-dot-carousel";
export type LoopProps = {
  variant: LoopVariant;
  color: TThemeColor;
};
const Loop = (props: LoopProps) => {
  const MappedStyled: {
    [key in LoopVariant]: IStyledComponent<any, any, any>;
  } = {
    "three-dot-carousel": S.threeDotCarousel,
  };
  const MappedStyledComponent = MappedStyled[props.variant];

  if (Object.keys(MappedStyled).includes(props.variant))
    return <MappedStyledComponent {...props} />;
  else return null;
};

export default Loop;
