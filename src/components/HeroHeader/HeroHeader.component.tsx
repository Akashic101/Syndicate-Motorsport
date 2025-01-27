import {
  Button,
  Container,
  Overlay,
  Text,
  Title,
  BackgroundImage,
} from "@mantine/core";

export function HeroHeader() {
  return (
    <BackgroundImage
      src="/images/Screenshot_wsc_legends_matra_m630_brm_rj_lemans_1967_27-0-125-19-41-9.png"
      className="w-full h-screen bg-cover bg-center"
    >
      <Overlay zIndex={0} />
      <Container className="relative z-10 h-full flex flex-col justify-start items-start pt-48">
        <Title className="text-white text-7xl font-extrabold">
          Syndicate Motorsport
        </Title>
        <Text className="text-white sm:max-w-full mt-4">
          Join our weekly races and become part of an active, passionate
          community. Enjoy custom skill and safety ratings as you compete in
          thrilling races across three exciting games: Assetto Corsa, Assetto
          Corsa Evo, and Richard Burns Rallye. Whether you're a seasoned driver
          or just starting out, there's always a race waiting for you!
        </Text>

        <Button className="bg-SynBlue mt-12" size="xl" radius="xl">
          Join our Discord
        </Button>
      </Container>
    </BackgroundImage>
  );
}
