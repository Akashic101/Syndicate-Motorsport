import React from "react";
import { Image } from "@mantine/core";
import { useMantineColorScheme } from "@mantine/core"; // Import the hook

const Logo = () => {
  const { colorScheme } = useMantineColorScheme(); // Get the current color scheme

  // Define the logo paths for light and dark color schemes
  const lightLogo =
    "/images/logos/2025-01-27-Syndicate-Motorsport-Horizontal-Logo-black.png"; // Path to the light logo
  const darkLogo =
    "/images/logos/2025-01-27-Syndicate-Motorsport-Horizontal-Logo-white.png"; // Path to the dark logo

  return (
    <div className="flex items-center space-x-2">
      <Image
        src={colorScheme === "light" ? lightLogo : darkLogo} // Conditionally render based on color scheme
        alt="Syndicate Motorsport Logo"
        className="h-10 w-auto"
      />
    </div>
  );
};

export default Logo;
