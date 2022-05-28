export const defaultThemes: any = {
  default: {
    name: "default",
    default: true,
    font: {
      family: "sans-serif",
      size: "1em",
    },
    colors: {
      primary: "#2d313b",
      "primary-lighter": "#41444c",
      "primary-darker": "#202129",
      "primary-darkest": "#191923",
      text: "#f0f0ff",
      textInvert: "#131313",
      "secondary-text": "#f0f0ff",
      secondary: "#e6349c", // #d02789
      "secondary-opacity": "rgba(230, 52, 156, 0.5)",
      hover: "rgb(255 255 255 / 0.05)",
      focus: "rgb(255 255 255 / 0.1)",
    },
  },
  dark: {
    name: "dark",
    default: true,
    font: {
      family: "monospace",
      size: "1.1em",
    },
    colors: {
      primary: "#2d313b",
      "primary-lighter": "#41444c",
      "primary-darker": "#202129",
      "primary-darkest": "#191923",
      text: "#f0f0ff",
      textInvert: "#131313",
      "secondary-text": "#f0f0ff",
      secondary: "rgb(230 73 52)",
      "secondary-opacity": "rgb(230 73 52 / 0.5)",
      hover: "rgb(255 255 255 / 0.05)",
      focus: "rgb(255 255 255 / 0.1)",
    },
  },
  light: {
    name: "light",
    default: true,
    font: {
      family: "sans-serif",
      size: "1em",
    },
    colors: {
      primary: "#EFF2F6",
      "primary-lighter": "#E8E8E8",
      "primary-darker": "#CDD0D5",
      "primary-darkest": "#A1A4AA",
      text: "#333748",
      textInvert: "#f0f0ff",
      "secondary-text": "#131313",
      secondary: "#e6349c",
      "secondary-opacity": "rgb(230 52 156 / 0.5)",
      hover: "rgb(0 0 0 / 0.05)",
      focus: "rgb(0 0 0 / 0.1)",
    },
  },
  white: {
    name: "white",
    default: true,
    font: {
      family: "Trebuchet MS",
      size: "1em",
    },
    colors: {
      primary: "#2d313b",
      "primary-lighter": "#41444c",
      "primary-darker": "#202129",
      "primary-darkest": "#191923",
      text: "#f0f0ff",
      textInvert: "#131313",
      "secondary-text": "#ffffff",
      secondary: "#ffffff",
      "secondary-opacity": "rgba(255, 255, 255, 0.5)",
      hover: "rgb(255 255 255 / 0.05)",
      focus: "rgb(255 255 255 / 0.1)",
    },
  },
  black: {
    name: "black",
    default: true,
    font: {
      family: "sans-serif",
      size: "1em",
    },
    colors: {
      primary: "#202020",
      "primary-lighter": "#303030",
      "primary-darker": "#101010",
      "primary-darkest": "#000000",
      text: "#cccccc",
      textInvert: "#131313",
      "secondary-text": "#eeeeee",
      secondary: "#00ffbe",
      "secondary-opacity": "rgb(0 255 190 / 0.5)",
      hover: "rgb(255 255 255 / 0.2)",
      focus: "rgb(255 255 255 / 0.3)",
    },
  },
  terminal: {
    name: "Terminal",
    font: {
      family: "monospace",
      size: "1em",
    },
    colors: {
      primary: "#202020",
      "primary-lighter": "#303030",
      "primary-darker": "#101010",
      "primary-darkest": "#000000",
      text: "#cccccc",
      textInvert: "#131313",
      "secondary-text": "#F1F1F1",
      secondary: "#00FF00",
      "secondary-opacity": "rgb(58 210 255 / 0.5)",
      hover: "rgb(255 255 255 / 0.2)",
      focus: "rgb(255 255 255 / 0.3)",
    },
  },
}