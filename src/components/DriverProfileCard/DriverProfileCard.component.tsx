import {
  Card,
  CardSection,
  Image,
  Text,
  Group,
  Grid,
  GridCol,
} from "@mantine/core";

const stats = [
  { value: "DE", label: "Nationality" },
  { value: "1673", label: "ELO Rating" },
  { value: "B", label: "Safety Rating" },
  { value: "50", label: "Wins" },
];

const items = stats.map((stat) => (
  <GridCol key={stat.label} span={6}>
    <Text ta="center" fz="lg" fw={500}>
      {stat.value}
    </Text>
    <Text ta="center" fz="sm" c="dimmed" lh={1}>
      {stat.label}
    </Text>
  </GridCol>
));

export default function DriverProfileCard() {
  return (
    <Card shadow="sm" padding="xs" radius="md" withBorder>
      <CardSection
        withBorder
        inheritPadding
        py="xs"
        style={{
          background: "linear-gradient(to left, silver, transparent)",
        }}
      >
        <Group justify="space-between">
          <Text fw={500}>Driver Profile</Text>
        </Group>
      </CardSection>
      <CardSection>
        <Grid>
          <GridCol span={3}>
            <Image
              src="https://avatars.cloudflare.steamstatic.com/d716afce0ef2370bff095f25584aa62b6a7760fa_full.jpg"
              height={200}
              width={200}
              alt="Norway"
              m={"xs"}
            />
          </GridCol>
          <GridCol span={9}>
            <Text ta="center" fz="lg" fw={500} mt="sm" size="lg">
              Akashic
            </Text>
            <Text ta="center" fz="sm" c="dimmed"></Text>
            <Grid mt="md" justify="center">
              {items}
            </Grid>
          </GridCol>
        </Grid>
      </CardSection>
    </Card>
  );
}
