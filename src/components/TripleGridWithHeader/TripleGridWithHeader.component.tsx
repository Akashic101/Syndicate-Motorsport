import { Title } from "@mantine/core";
import { TablerIcon } from "@tabler/icons-react";
import { GridItem } from "../GridItem/GridItem.component";

type TripleGridWithHeaderProps = {
  headerTitle: string;
  gridItems: {
    Icon: TablerIcon;
    title: string;
    description: string;
  }[];
};

export function TripleGridWithHeader({
  headerTitle,
  gridItems,
}: TripleGridWithHeaderProps) {
  return (
    <div className="p-12 bg-SynBlue">
      <Title className="text-white pb-16 text-5xl text-center w-full">
        {headerTitle}
      </Title>
      <div className="grid grid-cols-3 gap-4">
        {gridItems.map((item, index) => (
          <GridItem
            key={index}
            Icon={item.Icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
