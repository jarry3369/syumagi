import { TStyleName } from "@constants/types";
import {
  ReactNode,
  forwardRef,
  ReactElement,
  CSSProperties,
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
} from "react";
import * as S from "./style";

export interface ITypography {
  children: string | ReactNode;
  /**
   * 텍스트 색  */
  color?: string;
  /**
   * 텍스트 스타일 */
  styleName: TStyleName;

  sx?: CSSProperties;
}
export type TTextProps = ComponentPropsWithRef<"p"> &
  ITypography & {
    align?: string;
  };
export type THighlightProps = ComponentPropsWithoutRef<"span"> & ITypography;

export const Text = forwardRef<any, TTextProps>(
  ({ children, sx, ...props }, ref): ReactElement => {
    return (
      <S.Text {...props} style={sx} ref={ref}>
        {children}
      </S.Text>
    );
  }
);

export const Highlight = ({ children, sx, ...props }: THighlightProps) => {
  return (
    <S.Highlight style={sx} {...props}>
      {children}
    </S.Highlight>
  );
};
