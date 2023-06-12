import { Box, Heading } from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function User() {
  const { scrollY } = useScroll();

  const scale = useTransform(scrollY, [32, 80], [1, 0.6]);
  const userOpacity = useTransform(scrollY, [50, 100], [1, 0]);

  return (
    <Box as={motion.div} style={{ opacity: userOpacity }}>
      <motion.img
        alt="Lebron James"
        src="https://c4.wallpaperflare.com/wallpaper/622/208/897/lebron-james-pc-backgrounds-hd-wallpaper-preview.jpg"
        style={{
          borderRadius: "100%",
          objectFit: "cover",
          width: 80,
          height: 80,
          scale,
          originX: 0,
          marginBottom: 2,
        }}
      />
      <Heading size="md" color="white">
        @lebron
      </Heading>
    </Box>
  );
}
