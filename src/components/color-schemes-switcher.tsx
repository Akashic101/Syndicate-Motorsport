"use client";

import { IconMoon, IconSun } from "@tabler/icons-react";
import { ActionIcon, Group, useMantineColorScheme } from "@mantine/core";

export function ColorSchemesSwitcher() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  const toggleColorScheme = () => {
    setColorScheme(colorScheme === "light" ? "dark" : "light");
  };

  return (
    <Group justify="center" className="pl-4">
      <ActionIcon
        onClick={toggleColorScheme}
        variant="default"
        aria-label="Toggle color scheme"
      >
        {colorScheme === "light" ? (
          <IconMoon stroke={1.5} />
        ) : (
          <IconSun stroke={1.5} />
        )}
      </ActionIcon>
    </Group>
  );
}
