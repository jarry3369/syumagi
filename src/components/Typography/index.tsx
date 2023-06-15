import {
  forwardRef,
  ReactElement,
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
} from "react";
import * as S from "./style";

export const Text = forwardRef<any, ComponentPropsWithRef<"p"> & TTextProps>(
  ({ children, sx, weight = "medium", ...props }, ref): ReactElement => {
    return (
      <S.Text ref={ref} {...{ weight }} style={sx} {...props}>
        {children}
      </S.Text>
    );
  }
);

export const Highlight = ({
  children,
  sx,
  ...props
}: ComponentPropsWithoutRef<"span"> & THighlightProps) => {
  return (
    <S.Highlight style={sx} {...props}>
      {children ?? null}
    </S.Highlight>
  );
};
