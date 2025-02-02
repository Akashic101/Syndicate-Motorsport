"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardSection,
  Image,
  Text,
  Group,
  Grid,
  GridCol,
  Loader,
} from "@mantine/core";

const CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSPXEpA0_3WvJmtxJTKZ97Bi8tbZWsjCZT892N4mNgdaMJyhO-Syh1Xn-Yf4KaGw9SAZjGRwjtCpjZb/pub?gid=0&single=true&output=csv";

interface DriverData {
  name: string;
  nationality: string;
  elo: string;
  safetyRating: string;
  wins: string;
  imageUrl: string;
}

export default function DriverProfileCard() {
  const [driver, setDriver] = useState<DriverData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(CSV_URL)
      .then((response) => response.text())
      .then((data) => {
        const rows = data.split("\n").slice(1);
        const firstRow = rows[0].split(",");

        const driverData: DriverData = {
          name: firstRow[22].trim(),
          nationality: "🏴‍☠️",
          elo: firstRow[7],
          safetyRating: firstRow[5],
          wins: firstRow[13],
          imageUrl: firstRow[19],
        };

        setDriver(driverData);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <Loader size="lg" />;
  }

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
              src={driver?.imageUrl}
              height={200}
              width={200}
              alt={driver?.name}
              m="xs"
            />
          </GridCol>
          <GridCol span={9}>
            <Text ta="center" fz="lg" fw={500} mt="sm" size="lg">
              {driver?.name}
            </Text>
            <Grid mt="md" justify="center">
              <GridCol span={6}>
                <Text ta="center" fz="lg" fw={500}>
                  {driver?.nationality}
                </Text>
                <Text ta="center" fz="sm" c="dimmed" lh={1}>
                  Nationality
                </Text>
              </GridCol>
              <GridCol span={6}>
                <Text ta="center" fz="lg" fw={500}>
                  {driver?.elo}
                </Text>
                <Text ta="center" fz="sm" c="dimmed" lh={1}>
                  ELO Rating
                </Text>
              </GridCol>
              <GridCol span={6}>
                <Text ta="center" fz="lg" fw={500}>
                  {driver?.safetyRating}
                </Text>
                <Text ta="center" fz="sm" c="dimmed" lh={1}>
                  Safety Rating
                </Text>
              </GridCol>
              <GridCol span={6}>
                <Text ta="center" fz="lg" fw={500}>
                  {driver?.wins}
                </Text>
                <Text ta="center" fz="sm" c="dimmed" lh={1}>
                  Wins
                </Text>
              </GridCol>
            </Grid>
          </GridCol>
        </Grid>
      </CardSection>
    </Card>
  );
}
