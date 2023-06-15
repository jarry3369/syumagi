import { Children, ComponentPropsWithRef, Fragment, forwardRef } from "react";
import * as S from "./style";

const Stack = forwardRef<
  HTMLDivElement,
  ComponentPropsWithRef<"div"> & StackProps
>(({ sx, children, divider, ...props }, ref) => {
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
});

export default Stack;
