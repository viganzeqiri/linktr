import {
  Box,
  Flex,
  IconButton,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/react";
import { FiShare } from "react-icons/fi";

import { type Link as LinkType } from "@/pages/api/links";

import { type LinkToShare } from "../tree/Tree";

type Props = LinkType & { openModal?: (linkData: LinkToShare) => void };

export default function Link({ label, url, openModal }: Props) {
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
      fontWeight="bold"
      flexWrap="nowrap"
      _hover={{
        background: "brand.fourth",
        transform: "scale(1.02)",
        boxShadow: "3px 3px white",
        textDecoration: "none",
        "& .share-btn": {
          opacity: 1,
        },
      }}
      href={url}
      isExternal
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Box>
          <Text>{label}</Text>
        </Box>

        <Box
          opacity={0}
          className="share-btn"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <IconButton
            aria-label="Share"
            icon={<FiShare />}
            borderRadius="full"
            onClick={() =>
              openModal?.({
                link: url,
                text: "Share this link",
              })
            }
          />
        </Box>
      </Flex>
    </Box>
  );
}
