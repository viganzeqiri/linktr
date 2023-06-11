import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const colors = {
  brand: {
    first: "#8ad5eb",
    second: "#8a54a2",
    third: "#5954a4",
    fourth: "#04254e",
  },
};

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const fonts = { heading: "var(--font-roboto)", body: "var(--font-roboto)" };

export const theme = extendTheme({
  colors,
  config,
  fonts,
});
