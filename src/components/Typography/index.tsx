import { TFontWeight, TStyleName } from "@constants/types";
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
  weight?: TFontWeight;
  /**
   * 텍스트 스타일 */
  styleName: TStyleName;

  sx?: CSSProperties;
}
export type TTextProps = ComponentPropsWithRef<"p"> &
  ITypography & {
    align?: string;
  };
export type THighlightProps = ComponentPropsWithoutRef<"span"> &
  Partial<ITypography>;

export const Text = forwardRef<any, TTextProps>(
  ({ children, sx, weight = "medium", ...props }, ref): ReactElement => {
    return (
      <S.Text ref={ref} {...{ weight }} style={sx} {...props}>
        {children}
      </S.Text>
    );
  }
);

export const Highlight = ({ children, sx, ...props }: THighlightProps) => {
  return (
    <S.Highlight style={sx} {...props}>
      {children ?? null}
    </S.Highlight>
  );
};
