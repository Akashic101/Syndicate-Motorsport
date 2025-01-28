import { Title, Text } from "@mantine/core";
import { TablerIcon } from "@tabler/icons-react";

type GridItemProps = {
  Icon: TablerIcon;
  title: string;
  description: string;
};

export function GridItem({ Icon, title, description }: GridItemProps) {
  return (
    <div className="flex justify-center items-center">
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <Icon size={80} stroke={1.5} className="text-white" />
        </div>
        <Title className="text-3xl text-center w-full text-white">
          {title}
        </Title>
        <Text className="text-center text-white">{description}</Text>
      </div>
    </div>
  );
}
