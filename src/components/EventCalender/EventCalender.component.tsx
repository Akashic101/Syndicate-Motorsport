"use client";

import { useEffect, useState } from "react";
import {
  Table,
  TableTbody,
  TableTd,
  TableTh,
  TableThead,
  TableTr,
  Title,
  Loader,
} from "@mantine/core";

const CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSPXEpA0_3WvJmtxJTKZ97Bi8tbZWsjCZT892N4mNgdaMJyhO-Syh1Xn-Yf4KaGw9SAZjGRwjtCpjZb/pub?gid=1933046167&single=true&output=csv";

interface EventData {
  name: string;
  url: string;
  date: Date;
}

export default function EventCalendar() {
  const [events, setEvents] = useState<EventData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(CSV_URL)
      .then((response) => response.text())
      .then((data) => {
        const rows = data.split("\n").slice(1);
        const parsedEvents: EventData[] = rows
          .map((row) => {
            const cols = row.split(",");
            if (cols.length < 2) return null;

            const eventHtml = cols[0];
            const timeString = cols[1].trim();

            const match = eventHtml.match(/<a href="(.*?)">(.*?)<\/a>/);
            if (!match) return null;

            return {
              name: match[2],
              url: match[1],
              date: new Date(timeString),
            };
          })
          .filter((event): event is EventData => event !== null);

        setEvents(parsedEvents);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="flex flex-col items-center m-4 space-y-4">
      <Title className="text-center">Scheduled Events</Title>
      {loading ? (
        <Loader size="lg" />
      ) : (
        <Table className="w-1/2">
          <TableThead>
            <TableTr>
              <TableTh>Event</TableTh>
              <TableTh>Date/Time</TableTh>
            </TableTr>
          </TableThead>
          <TableTbody>
            {events.map((event, index) => (
              <TableTr key={index}>
                <TableTd>
                  <a href={event.url} target="_blank" rel="noopener noreferrer">
                    {event.name}
                  </a>
                </TableTd>
                <TableTd>
                  {event.date.toLocaleString("en-GB", {
                    timeZone: "Europe/London",
                  })}{" "}
                  GMT
                </TableTd>
              </TableTr>
            ))}
          </TableTbody>
        </Table>
      )}
    </div>
  );
}
