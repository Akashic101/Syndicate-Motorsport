import { ActiveSimsGrid } from "@/components/ActiveSimsGrid/ActiveSimsGrid.component";
import { Header } from "@/components/Header/Header.component";
import { HeroHeader } from "@/components/HeroHeader/HeroHeader.component";
import { TripleGridWithHeader } from "@/components/TripleGridWithHeader/TripleGridWithHeader.component";
import { AppShell, AppShellHeader, AppShellMain } from "@mantine/core";

export default function Home() {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShellHeader>
        <Header />
      </AppShellHeader>
      <AppShellMain className="p-0">
        <HeroHeader />
        <TripleGridWithHeader />
        <ActiveSimsGrid />
      </AppShellMain>
    </AppShell>
  );
}
