import { chakra, Heading, IconButton } from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { LuMoreHorizontal } from "react-icons/lu";

export default function Header() {
  const { scrollY } = useScroll();

  const headerBg = useTransform(
    scrollY,
    [10, 100],
    ["transparent", "rgba(255,255,255, 0.5)"]
  );
  const headerBlur = useTransform(
    scrollY,
    [10, 100],
    ["blur(0px)", "blur(10px)"]
  );
  const avatarOpacity = useTransform(scrollY, [70, 100], [0, 1]);

  return (
    <chakra.header
      as={motion.header}
      top={6}
      p={4}
      pos="sticky"
      zIndex={10}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      borderRadius="lg"
      style={{
        background: headerBg,
        backdropFilter: headerBlur,
      }}
    >
      <motion.div
        style={{
          opacity: avatarOpacity,
          display: "flex",
          alignItems: "center",
        }}
      >
        <motion.img
          alt="Lebron James"
          src="https://c4.wallpaperflare.com/wallpaper/622/208/897/lebron-james-pc-backgrounds-hd-wallpaper-preview.jpg"
          style={{
            borderRadius: "100%",
            objectFit: "cover",
            width: 50,
            height: 50,
            marginLeft: -2,
            opacity: avatarOpacity,
          }}
        />

        <Heading size="md" ml={4}>
          @lebron
        </Heading>
      </motion.div>

      <IconButton
        aria-label="Share"
        icon={<LuMoreHorizontal />}
        borderRadius="full"
      />
    </chakra.header>
  );
}
