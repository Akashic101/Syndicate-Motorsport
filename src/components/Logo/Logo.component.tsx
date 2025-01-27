import React from "react";
import { Image } from "@mantine/core";
import { useMantineColorScheme } from "@mantine/core";

const Logo = () => {
  const { colorScheme } = useMantineColorScheme();

  const lightLogo =
    "/images/logos/2025-01-27-Syndicate-Motorsport-Horizontal-Logo-black.png";
  const darkLogo =
    "/images/logos/2025-01-27-Syndicate-Motorsport-Horizontal-Logo-white.png";

  return (
    <div className="flex items-center space-x-2">
      <Image
        src={colorScheme === "light" ? lightLogo : darkLogo}
        alt="Syndicate Motorsport Logo"
        className="h-10 w-auto"
      />
    </div>
  );
};

export default Logo;
