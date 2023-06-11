import Stack from "@/components/Stack";
import { Timeline } from "@/components/TwitterWidgets";
import { useState } from "react";

export const Tweets = () => {
  const height = 900;
  const [currentTarget, setCurrentTarget] = useState<string>("syumagi_");
  const [isFetching, setIsFetching] = useState<boolean>(true);
  return (
    <Stack
      direction="row"
      align="start"
      justify="center"
      sx={{
        width: 0,
        background: "red",
        borderRadius: 12,
        height: height,
      }}
    >
      <Stack sx={{ background: "green", width: "30rem", borderRadius: 12 }}>
        {[
          { name: "終電間際≦オンライン。", t_id: "syumagi_" },
          { name: "春茶", t_id: "HARUTYA1226" },
          { name: "sakuma", t_id: "_Sakuma0331" },
          { name: "ナナカワ", t_id: "7_kawa" },
          { name: "Tabi", t_id: "ArahashiTabi" },
        ].map((member) => {
          return (
            <div
              onClick={() => {
                setIsFetching(true);
                setCurrentTarget(member.t_id);
              }}
              style={{ padding: 20 }}
            >
              {member.name}
            </div>
          );
        })}
      </Stack>
      <Timeline
        dataSource={{ sourceType: "profile", screenName: currentTarget }}
        options={{ lang: "ja", width: "calc(100vh - 20rem)", height: height }}
        {...{ isFetching, setIsFetching }}
      />
    </Stack>
  );
};
export default Tweets;
