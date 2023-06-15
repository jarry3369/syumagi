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
  hero: {
    "font-size": "50px",
    "line-height": "65px",
  },
  headline: {
    "font-size": "38px",
    "line-height": "49px",
  },
  subheadline: {
    "font-size": "28px",
    "line-height": "36px",
  },
  title: {
    "font-size": "22px",
    "line-height": "33px",
  },
  subtitle: {
    "font-size": "18px",
    "line-height": "27px",
  },
  body: {
    "font-size": "16px",
    "line-height": "24px",
  },
  caption: {
    "font-size": "14px",
    "line-height": "21px",
  },
  tooltip: {
    "font-size": "12px",
    "line-height": "18px",
  },
};
const theme = {
  colors,
  fontStyle,
};

export default theme;
