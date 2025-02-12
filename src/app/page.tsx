import { ActiveSimsGrid } from "@/components/ActiveSimsGrid/ActiveSimsGrid.component";
import EventCalendar from "@/components/EventCalender/EventCalender.component";
import { HeroHeader } from "@/components/HeroHeader/HeroHeader.component";
import { TripleGridWithHeader } from "@/components/TripleGridWithHeader/TripleGridWithHeader.component";
import {
  IconCalendarStats,
  IconCalendarWeek,
  IconChartBarPopular,
  IconMedal2,
  IconSteeringWheelFilled,
  IconUsersGroup,
} from "@tabler/icons-react";

const reasonsGrid = [
  {
    Icon: IconCalendarWeek,
    title: "Weekly Races and Leagues",
    description: "Get on track as often as you like.",
  },
  {
    Icon: IconChartBarPopular,
    title: "ELO and Safety Ratings",
    description: "Increase your skill and safety racing with each event.",
  },
  {
    Icon: IconMedal2,
    title: "All skill levels",
    description: "We welcome drivers of all abilities and controllers.",
  },
];

const discordStats = [
  {
    Icon: IconUsersGroup,
    title: ">650 members",
    description: "Join our ever-growing community for simracing and motorsport",
  },
  {
    Icon: IconSteeringWheelFilled,
    title: "4 Sim Titles",
    description: "Something is here for everyone",
  },
  {
    Icon: IconCalendarStats,
    title: "4 years of experience",
    description: "Top events managed with lots of experience.",
  },
];

export default function Home() {
  return (
    <>
      <HeroHeader />
      <TripleGridWithHeader
        headerTitle="Why race here?"
        gridItems={reasonsGrid}
      />
      <ActiveSimsGrid />
      <TripleGridWithHeader
        headerTitle="Our experience"
        gridItems={discordStats}
      />
      <EventCalendar />
    </>
  );
}
