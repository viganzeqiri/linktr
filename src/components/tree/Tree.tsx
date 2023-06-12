import { Box, chakra } from "@chakra-ui/react";
import { Header, Links, SocialLinks, User } from "@/components";

import { type Links as LinksType } from "@/pages/api/links";

type Props = LinksType;

export default function Tree({ others, social }: Props) {
  return (
    <Box w={["95vw", "container.sm"]} marginX="auto">
      <Header />

      <chakra.main px={4} py={8}>
        <Box pos="sticky" top={7}>
          <User />
        </Box>

        <Box>
          <Links links={others} />
        </Box>
      </chakra.main>

      <SocialLinks links={social} />
    </Box>
  );
}
