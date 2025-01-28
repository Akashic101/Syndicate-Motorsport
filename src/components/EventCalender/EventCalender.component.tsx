import {
  Table,
  TableTbody,
  TableTd,
  TableTh,
  TableThead,
  TableTr,
  Title,
} from "@mantine/core";

const elements = [
  {
    game: "Assetto Corsa",
    track: "Sachsenring",
    car: "Radical SR3 XX",
    date: new Date("2025-01-29T21:00:00"),
  },
  {
    game: "Assetto Corsa",
    track: "Sachsenring",
    car: "Radical SR3 XX",
    date: new Date("2025-01-29T21:00:00"),
  },
  {
    game: "Assetto Corsa",
    track: "Sachsenring",
    car: "Radical SR3 XX",
    date: new Date("2025-01-29T21:00:00"),
  },
  {
    game: "Assetto Corsa",
    track: "Sachsenring",
    car: "Radical SR3 XX",
    date: new Date("2025-01-29T21:00:00"),
  },
  {
    game: "Assetto Corsa",
    track: "Sachsenring",
    car: "Radical SR3 XX",
    date: new Date("2025-01-29T21:00:00"),
  },
];

export function EventCalender() {
  const rows = elements.map((element) => (
    <TableTr key={element.game}>
      <TableTd>{element.game}</TableTd>
      <TableTd>{element.track}</TableTd>
      <TableTd>{element.car}</TableTd>
      <TableTd>{element.date.toLocaleString()}</TableTd>
    </TableTr>
  ));

  return (
    <div className="flex flex-col items-center m-4 space-y-4">
      <Title className="text-center">Scheduled Events</Title>
      <Table className="w-1/2">
        <TableThead>
          <TableTr>
            <TableTh>Game</TableTh>
            <TableTh>Circuit</TableTh>
            <TableTh>Car</TableTh>
            <TableTh>Date/Time</TableTh>
          </TableTr>
        </TableThead>
        <TableTbody>{rows}</TableTbody>
      </Table>
    </div>
  );
}
