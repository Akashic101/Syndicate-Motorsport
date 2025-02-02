import DriverProfileCard from "@/components/DriverProfileCard/DriverProfileCard.component";
import DriverProfileLastChanges from "@/components/DriverProfileLastChanges/DriverProfileLastChanges";
import DriverProfileTrophies from "@/components/DriverProfileTrophies/DriverProfileTrophies";
import { Grid, GridCol, Title } from "@mantine/core";

export default function DriverProfile() {
  return (
    <>
      <Title>Driver Center</Title>
      <Grid>
        <GridCol span={4}>
          <DriverProfileCard />
        </GridCol>
        <GridCol span={8}>
          <DriverProfileLastChanges />
        </GridCol>
      </Grid>
      <DriverProfileTrophies />
    </>
  );
}
