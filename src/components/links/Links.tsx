import { Box } from "@chakra-ui/react";
import { Link } from "@/components";

import { type Link as LinkType } from "@/data/links";

import { type LinkToShare } from "../tree/Tree";

type Props = {
  links: LinkType[];
  openModal?: (linkData: LinkToShare) => void;
};

export default function Links({ links, openModal }: Props) {
  return (
    <Box>
      {links.map((link) => (
        <Link key={link.url} {...link} openModal={openModal} />
      ))}
    </Box>
  );
}
