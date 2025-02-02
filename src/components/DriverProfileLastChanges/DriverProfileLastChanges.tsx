"use client";

import { useEffect, useState } from "react";
import {
  TableTr,
  TableTd,
  Table,
  TableThead,
  TableTh,
  TableTbody,
  TableCaption,
  Loader,
} from "@mantine/core";

// Define the type for the event
type Event = {
  date: Date;
  platform: string;
  track: string;
  eloChange: number; // ELO change should be a number for calculation
};

// URL for CSV data
const CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSPXEpA0_3WvJmtxJTKZ97Bi8tbZWsjCZT892N4mNgdaMJyhO-Syh1Xn-Yf4KaGw9SAZjGRwjtCpjZb/pub?gid=1739484625&single=true&output=csv";

// Helper function to parse date strings like "26-11-2022 22:7"
const parseDate = (dateString: string) => {
  const [datePart, timePart] = dateString.split(" ");
  const [day, month, year] = datePart.split("-");
  const [hour, minute] = timePart.split(":");

  return new Date(
    `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}T${hour.padStart(2, "0")}:${minute.padStart(2, "0")}:00`,
  );
};

export default function DriverProfileLastChanges() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(CSV_URL)
      .then((response) => response.text())
      .then((data) => {
        const rows = data.split("\n").slice(1);

        // Filter and map the data to the desired structure
        const formattedEvents: Event[] = rows
          .map((row) => row.split(","))
          .filter((row) => row[0] === "76561198067910175") // Filtering for the driver
          .map((row) => {
            const date = parseDate(row[1]);
            return {
              date,
              platform: row[4], // Platform
              track: row[2], // Track
              eloChange: parseFloat(row[3]), // ELO change
            };
          });

        setEvents(formattedEvents);
        setLoading(false); // Set loading to false once the data is fetched
      })
      .catch(() => setLoading(false)); // Handle errors gracefully
  }, []);

  // Calculate the total ELO change and the number of races
  const totalELO = events.reduce((total, event) => total + event.eloChange, 0);
  const raceCount = events.length;

  if (loading) {
    return <Loader size="lg" />;
  }

  const rows = events.map((element, index) => {
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
    }).format(element.date);

    return (
      <TableTr key={index}>
        <TableTd>{element.platform}</TableTd>
        <TableTd>{formattedDate}</TableTd>
        <TableTd>{element.track}</TableTd>
        <TableTd>{element.eloChange}</TableTd>
      </TableTr>
    );
  });

  return (
    <Table>
      <TableCaption>
        Total ELO gained/lost over the last {raceCount} races:{" "}
        {totalELO.toFixed(2)}
      </TableCaption>
      <TableThead>
        <TableTr>
          <TableTh>Game</TableTh>
          <TableTh>Date</TableTh>
          <TableTh>Track</TableTh>
          <TableTh>ELO Lost/Gained</TableTh>
        </TableTr>
      </TableThead>
      <TableTbody>{rows}</TableTbody>
    </Table>
  );
}
