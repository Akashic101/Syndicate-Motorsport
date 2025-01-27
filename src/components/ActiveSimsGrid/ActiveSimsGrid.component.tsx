"use client";

import { useMantineColorScheme } from "@mantine/core";

export function ActiveSimsGrid() {
  const { colorScheme } = useMantineColorScheme(); // Get the current color scheme

  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="flex justify-center items-center">
        <img
          src={
            colorScheme === "dark"
              ? "/images/logos/acevo.svg"
              : "/images/logos/acevo-light.png"
          }
          alt={colorScheme === "dark" ? "AMS2" : "ACEVO"}
          className="scale-75"
        />
      </div>
      <div className="flex justify-center items-center">
        <img
          src={"/images/logos/ac.png"}
          alt="Assetto Corsa"
          className="scale-75"
        />
      </div>
      <div className="flex justify-center items-center">
        <img src={"/images/logos/ams2.png"} alt="AMS2" className="scale-75" />
      </div>
      <div className="flex justify-center items-center">
        <img src={"/images/logos/rbr.png"} alt="RBR" className="scale-75" />
      </div>
    </div>
  );
}
