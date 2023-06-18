import { css } from "styled-components";

type DeviceType = "xs" | "sm" | "md" | "lg";

const sizes: Record<DeviceType, number> = {
  xs: 470,
  sm: 600,
  md: 1024,
  lg: 1320,
};

const media = Object.entries(sizes).reduce((acc, [key, value]) => {
  return {
    ...acc,
    [key]: (first: any | TemplateStringsArray, ...interpolations: any[]) => css`
      @media screen and (max-width: ${value}px) {
        ${css(first, ...interpolations)}
      }
    `,
  };
}, {}) as Record<DeviceType, any>;

export { media };
