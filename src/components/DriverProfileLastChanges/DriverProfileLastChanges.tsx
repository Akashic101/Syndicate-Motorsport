import {
  TableTr,
  TableTd,
  Table,
  TableThead,
  TableTh,
  TableTbody,
} from "@mantine/core";

const events = [
  { date: new Date("2025-09-04"), event: "You finished 3rd in a race" },
  { date: new Date("2025-03-03"), event: "You finished 1st in a race" },
  { date: new Date("2025-07-20"), event: "You finished 6th in a race" },
  { date: new Date("2025-06-15"), event: "You signed up to a league" },
  { date: new Date("2025-10-11"), event: "You finished 3rd in a race" },
];

export default function DriverProfileLastChanges() {
  const rows = events.map((element) => {
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
    }).format(element.date);

    return (
      <TableTr key={element.event}>
        <TableTd>{formattedDate}</TableTd>
        <TableTd>{element.event}</TableTd>
      </TableTr>
    );
  });

  return (
    <Table>
      <TableThead>
        <TableTr>
          <TableTh>Date</TableTh>
          <TableTh>Event</TableTh>
        </TableTr>
      </TableThead>
      <TableTbody>{rows}</TableTbody>
    </Table>
  );
}
