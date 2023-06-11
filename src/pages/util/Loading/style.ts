import { LazyImage } from "@/components/Image";
import Stack from "@/components/Stack";
import { media } from "@/constants/media";
import { styled } from "styled-components";

const Image = styled(LazyImage)`
  ${media.tablet`
    width: 18.75rem;
    height: 18.75rem;
  `}
`;

const CommentWrapper = styled(Stack)`
  ${media.tablet`
  flex-direction : column-reverse
  `}
`;

export { Image, CommentWrapper };
