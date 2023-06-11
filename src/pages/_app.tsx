import "@/styles/globals.css";

import { ChakraProvider } from "@chakra-ui/react";
import { Roboto } from "next/font/google";

import { theme } from "@/theme";
import type { AppProps } from "next/app";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-roboto: ${roboto.style.fontFamily};
          }
        `}
      </style>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
