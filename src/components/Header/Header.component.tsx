"use client";
import { useState } from "react";
import { Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Logo from "../Logo/Logo.component";
import { ColorSchemesSwitcher } from "../color-schemes-switcher";

const mainLinks = [
  { link: "#", label: "Events and Leagues" },
  { link: "#", label: "Drivers" },
  { link: "#", label: "Lap Records" },
  { link: "#", label: "Media" },
  { link: "#", label: "Patreon" },
  { link: "#", label: "Merch" },
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(0);

  const mainItems = mainLinks.map((item, index) => (
    <a
      href={item.link}
      key={item.label}
      className={`uppercase text-xs font-bold text-gray-900 dark:text-gray-100 px-2 py-[7px] border-b-2 border-transparent transition-colors ease-in-out ${
        index === active
          ? "underline underline-offset-[20px] decoration-SynBlue decoration-4"
          : ""
      }`}
      onClick={(event) => {
        event.preventDefault();
        setActive(index);
      }}
    >
      {item.label}
    </a>
  ));

  return (
    <header>
      <div className="container mx-auto flex items-center justify-between h-full">
        <div className="inline-block align-middle pt-2">
          <Logo />
        </div>
        <div className="hidden sm:flex flex-col justify-between h-full pt-4">
          <div className="flex gap-0 justify-end">
            {mainItems}
            <ColorSchemesSwitcher />
          </div>
        </div>
        <Burger
          opened={opened}
          onClick={toggle}
          size="sm"
          className="sm:hidden"
        />
      </div>
    </header>
  );
}
