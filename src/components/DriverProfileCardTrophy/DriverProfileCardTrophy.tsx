import {
  Card,
  CardSection,
  Image,
  Text,
  Badge,
  Button,
  Group,
} from "@mantine/core";

export default function DriverProfileCardTrophy() {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder w={200} h={200}>
      <CardSection>
        <Image
          src="https://placehold.co/100x100"
          height={100}
          width={100}
          alt="Norway"
        />
      </CardSection>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Norway Fjord Adventures</Text>
        <Badge color="pink">On Sale</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes
        with tours and activities on and around the fjords of Norway
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button>
    </Card>
  );
}
