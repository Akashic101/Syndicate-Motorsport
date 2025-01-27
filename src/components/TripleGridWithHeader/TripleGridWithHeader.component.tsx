import { Title, Text } from "@mantine/core";

export function TripleGridWithHeader() {
  return (
    <div className="p-12 bg-SynBlue">
      <Title className="text-gray-900 pb-16 text-5xl text-center w-full">
        Why race here?
      </Title>
      <div className="grid grid-cols-3 gap-4">
        <div className="flex justify-center items-center">
          <div>
            <Title className="text-3xl text-center w-full text-gray-900">
              Weekly Races and Leagues
            </Title>
            <Text className="text-center text-gray-900">
              Get on track as often as you like.
            </Text>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div>
            <Title className="text-3xl text-center w-full text-gray-900">
              ELO and Safety Ratings
            </Title>
            <Text className="text-center text-gray-900">
              Increase your skill and safety racing with each event.
            </Text>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div>
            <Title className="text-3xl text-center w-full text-gray-900">
              All skill levels
            </Title>
            <Text className="text-center text-gray-900">
              We welcome drivers of all abilities and controllers
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
