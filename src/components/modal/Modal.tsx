import { useEffect } from "react";
import {
  Button,
  Flex,
  Modal as ChakraModal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useClipboard,
} from "@chakra-ui/react";

import { type LinkToShare } from "../tree/Tree";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  linkToShare: LinkToShare;
};

export default function Modal({ isOpen, onClose, linkToShare }: Props) {
  const { onCopy, setValue, hasCopied } = useClipboard("");

  useEffect(() => {
    if (linkToShare.link) {
      setValue(linkToShare.link);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [linkToShare.link]);

  return (
    <ChakraModal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />

      <ModalContent
        borderBottomRadius={[0, "lg"]}
        height={["30vh", "initial"]}
        position={["fixed", "relative"]}
        top={["auto", "initial"]}
        bottom={["0", "initial"]}
        left={["auto", "initial"]}
        right={["auto", "initial"]}
        pb={4}
      >
        <ModalHeader>{linkToShare.text}</ModalHeader>
        <ModalCloseButton borderRadius="full" />
        <ModalBody>
          <Button w="full" h={14} onClick={onCopy}>
            <Flex
              w="full"
              justifyContent="space-between"
              alignItems="center"
              color="brand.second"
              fontWeight="normal"
            >
              <Text
                w="80%"
                textOverflow="ellipsis"
                overflow="hidden"
                textAlign="left"
              >
                {linkToShare.link}
              </Text>
              <Text>{hasCopied ? "Copied!" : "Copy"}</Text>
            </Flex>
          </Button>
        </ModalBody>
      </ModalContent>
    </ChakraModal>
  );
}
