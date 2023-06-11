import {
  ComponentPropsWithRef,
  Children,
  Fragment,
  forwardRef,
  ReactNode,
  CSSProperties,
} from "react";
import * as S from "./style";

export interface StackProps extends ComponentPropsWithRef<"div"> {
  children: ReactNode;

  /** 식별자 */
  name?: string;

  /**  flex-direction 에 대한 방향 스타일 속성값입니다*/
  direction?: "column-reverse" | "column" | "row-reverse" | "row";

  /** children 요소 사이의 gap 값 입니다*/
  spacing?: string | number;

  /** Stack 컴포넌트 박스에 대한 padding 값입니다*/
  padding?: string | number;

  /** justify-default start*/
  justify?:
    | "center"
    | "start"
    | "end"
    | "flex-end"
    | "flex-start"
    | "left"
    | "right"
    | "normal"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "stretch";

  /** align-default center*/
  align?:
    | "center"
    | "start"
    | "end"
    | "flex-end"
    | "flex-start"
    | "initial"
    | "inherit"
    | "revert"
    | "revert-layer"
    | "unset"
    | "baseline"
    | "stretch";

  /** CSS override를 위한 props*/
  sx?: CSSProperties;

  divider?: ReactNode;
}

const Stack = forwardRef<any, StackProps>(
  ({ sx, children, divider, ...props }, ref) => {
    const child_count = Children.count(children);

    return (
      <S.Stack ref={ref} id={props.name} key={props.name} {...props} style={sx}>
        {Children.map(children, (child, index) => {
          return (
            <Fragment>
              {child}
              {child && index < child_count - 1 && divider}
            </Fragment>
          );
        })}
      </S.Stack>
    );
  }
);

export default Stack;
