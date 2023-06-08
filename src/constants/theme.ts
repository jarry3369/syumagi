import { TStyleName, TThemeColor } from "./types";

const colors: { [key in TThemeColor]: string } = {
  SC01: "#FFF",
  SG00: "#ffffff",
  SG01: "#000000",
  SG01_1: "#0000001A",
  SG02: "#25282F",
  SG02_1: "#00000033",
  SG03: "#565B69",
  SG04: "#8F96A9",
  SG05: "#B2B8CC",
  SG05_1: "#B2B8CC33",
  SG06: "#D8DDEA",
  SG07: "#F0F3F9",
  SG08: "#F8F9FB",
  SG09: "#1A1E27",
};

const fontStyle: {
  [key in TStyleName]: {
    [key: string]: string;
  };
} = {
  headline1: {
    "font-weight": "700",
    "font-size": "24px",
    "line-height": "36px",
  },
  headline2: {
    "font-weight": "500",
    "font-size": "24px",
    "line-height": "36px",
  },
  headline3: {
    "font-weight": "400",
    "font-size": "24px",
    "line-height": "36px",
  },

  title1: {
    "font-weight": "700",
    "font-size": "20px",
    "line-height": "28px",
  },
  title2: {
    "font-weight": "500",
    "font-size": "20px",
    "line-height": "28px",
  },
  title3: {
    "font-weight": "400",
    "font-size": "20px",
    "line-height": "28px",
  },

  body1: {
    "font-weight": "700",
    "font-size": "16px",
    "line-height": "24px",
  },
  body2: {
    "font-weight": "500",
    "font-size": "16px",
    "line-height": "24px",
  },
  body3: {
    "font-weight": "400",
    "font-size": "16px",
    "line-height": "24px",
  },

  subheadline1: {
    "font-weight": "700",
    "font-size": "14px",
    "line-height": "22px",
  },
  subheadline2: {
    "font-weight": "500",
    "font-size": "14px",
    "line-height": "22px",
  },
  subheadline3: {
    "font-weight": "400",
    "font-size": "14px",
    "line-height": "22px",
  },

  caption1: {
    "font-weight": "700",
    "font-size": "12px",
    "line-height": "20px",
  },
  caption2: {
    "font-weight": "500",
    "font-size": "12px",
    "line-height": "20px",
  },
  caption3: {
    "font-weight": "400",
    "font-size": "12px",
    "line-height": "20px",
  },

  tooltip1: {
    "font-weight": "700",
    "font-size": "10px",
    "line-height": "16px",
  },

  tooltip2: {
    "font-weight": "500",
    "font-size": "10px",
    "line-height": "16px",
  },

  tooltip3: {
    "font-weight": "400",
    "font-size": "10px",
    "line-height": "16px",
  },
};
const theme = {
  colors,
  fontStyle,
};

export default theme;
