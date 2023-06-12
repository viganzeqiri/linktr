import { Box, Flex, Link } from "@chakra-ui/react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

import { type ReactNode } from "react";
import { type SocialLink } from "@/data/links";

type Props = {
  links: SocialLink[];
};

const icons: Record<string, ReactNode> = {
  Instagram: <AiFillInstagram size={30} />,
  Facebook: <FaFacebook size={30} />,
  Twitter: <FaTwitter size={30} />,
};

export default function SocialLinks({ links }: Props) {
  return (
    <Flex justifyContent="center" color="brand.first" pt={2} pb={24}>
      {links.map((link) => (
        <Link
          key={link.url}
          href={link.url}
          isExternal
          _hover={{
            transform: "scale(1.2)",
            textDecoration: "none",
          }}
        >
          <Box cursor="pointer" mx={3}>
            {icons[link.platform]}
          </Box>
        </Link>
      ))}
    </Flex>
  );
}
