import Stack from "@/components/Stack";
import { Timeline } from "@/components/TwitterWidgets";
import { useEffect, useRef, useState } from "react";
import {
  AiFillTwitterCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

// temp
type TMember = {
  name: string;
  t_id: string;
  y_id?: string;
  i_id?: string;
};

const members: Array<TMember> = [
  {
    name: "終電間際≦オンライン。",
    i_id: "syumagi_",
    t_id: "syumagi_",
    y_id: undefined,
  },
  {
    name: "春茶",
    i_id: "HARUTYA1226",
    t_id: "HARUTYA1226",
    y_id: undefined,
  },
  {
    name: "sakuma",
    i_id: "_Sakuma0331",
    t_id: "_Sakuma0331",
    y_id: undefined,
  },
  {
    name: "ナナカワ",
    i_id: "7_kawa",
    t_id: "7_kawa",
    y_id: undefined,
  },
];

export const Tweets = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentTarget, setCurrentTarget] = useState<string>("syumagi_");
  const [isFetching, setIsFetching] = useState<boolean>(true);

  useEffect(() => {
    setIsFetching(true);
  }, [currentTarget]);
  return (
    <Stack
      ref={containerRef}
      direction="row"
      align="start"
      justify="center"
      sx={{
        width: "max-content",
        background: "red",
        borderRadius: 12,
        height: "100%",
      }}
    >
      <Stack
        sx={{ width: "max-content", background: "green", borderRadius: 12 }}
      >
        {members.map((member) => {
          return (
            <Stack
              align="start"
              onClick={() => {
                setIsFetching(true);
                setCurrentTarget(member.t_id);
              }}
              style={{ padding: 20, cursor: "pointer" }}
            >
              {member.name}
              <Stack direction="row" padding={6} spacing={4} divider={"|"}>
                <AiFillTwitterCircle size={30} />
                <AiFillYoutube size={30} />
                <AiFillInstagram size={30} />
              </Stack>
            </Stack>
          );
        })}
      </Stack>
      <Timeline
        dataSource={{ sourceType: "profile", screenName: currentTarget }}
        options={{
          lang: "ja",
          width: "calc(100vmin)",
          height: containerRef.current?.offsetHeight,
        }}
        {...{ isFetching, setIsFetching }}
      />
    </Stack>
  );
};
export default Tweets;
