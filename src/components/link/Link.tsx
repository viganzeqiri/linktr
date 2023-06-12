import { Box, Link as ChakraLink } from "@chakra-ui/react";

import { type Link as LinkType } from "@/pages/api/links";

type Props = LinkType;

export default function Link({ label, url }: Props) {
  return (
    <Box
      as={ChakraLink}
      w="full"
      display="block"
      my={4}
      p={4}
      borderRadius="lg"
      boxShadow="5px 5px white"
      bg="brand.third"
      color="white"
      _hover={{
        background: "brand.fourth",
        transform: "scale(1.02)",
        boxShadow: "3px 3px white",
        textDecoration: "none",
      }}
      href={url}
      isExternal
      fontWeight="bold"
    >
      {label}
    </Box>
  );
}
