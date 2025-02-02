import { SimpleGrid } from "@mantine/core";
import DriverProfileCardTrophy from "../DriverProfileCardTrophy/DriverProfileCardTrophy";

export default function DriverProfileTrophies() {
  return (
    <SimpleGrid cols={6}>
      <div>
        <DriverProfileCardTrophy />
      </div>
      <div>
        <DriverProfileCardTrophy />
      </div>
      <div>
        <DriverProfileCardTrophy />
      </div>
      <div>
        <DriverProfileCardTrophy />
      </div>
      <div>
        <DriverProfileCardTrophy />
      </div>
    </SimpleGrid>
  );
}
