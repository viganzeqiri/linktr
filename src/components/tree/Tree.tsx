import { useState } from "react";
import { Box, chakra, useDisclosure } from "@chakra-ui/react";
import { Header, Links, Modal, SocialLinks, User } from "@/components";

import { type Links as LinksType } from "@/pages/api/links";

type Props = LinksType;
export type LinkToShare = {
  link: string;
  text: string;
};

export default function Tree({ others, social }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [linkToShare, setLinkToShare] = useState<LinkToShare>({
    link: "",
    text: "",
  });

  function openModal(linkToShare: LinkToShare) {
    setLinkToShare(linkToShare);
    onOpen();
  }

  return (
    <>
      <Box w={["95vw", "container.sm"]} marginX="auto">
        <Header openModal={openModal} />

        <chakra.main px={4} py={8}>
          <Box pos="sticky" top={7}>
            <User />
          </Box>

          <Box>
            <Links links={others} openModal={openModal} />
          </Box>
        </chakra.main>

        <SocialLinks links={social} />
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} linkToShare={linkToShare} />
    </>
  );
}
