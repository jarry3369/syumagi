import { styled } from "styled-components";
import { LazyImage } from "@/components/Image";
import { Text as OriginText } from "@/components/Typography";

import { media } from "@/constants/media";

const Image = styled(LazyImage)`
  ${media.md`
    width: 300px;
    height: 300px;
  `}
`;

const Text = styled(OriginText)`
  ${media.md`
    margin: 1.2rem 0;
  `}
`;

export { Image, Text };
