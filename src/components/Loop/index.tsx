import { IStyledComponent } from "styled-components";

import * as S from "./style";

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
