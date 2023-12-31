import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { Tree } from "@/components";
import links from "@/data/links";

import { type InferGetStaticPropsType } from "next";

export async function getStaticProps() {
  return {
    props: { links },
  };
}

export default function Home({
  links,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Linktree</title>
        <meta name="description" content="Linktree" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        w="100vw"
        minH="100vh"
        justifyContent="center"
        bgGradient="linear(brand.first 15%, brand.second 70%)"
        bgRepeat="repeat-y"
      >
        <Tree {...links} />
      </Box>
    </>
  );
}
