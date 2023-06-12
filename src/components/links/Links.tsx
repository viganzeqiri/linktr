import { Box } from "@chakra-ui/react";
import { Link } from "@/components";

import { type Link as LinkType } from "@/pages/api/links";

type Props = {
  links: LinkType[];
};

export default function Links({ links }: Props) {
  return (
    <Box>
      {links.map((link) => (
        <Link key={link.url} {...link} />
      ))}
    </Box>
  );
}
