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
    y_id: "@syumagi_",
  },
  {
    name: "春茶",
    t_id: "HARUTYA1226",
    i_id: "harutya_",
    y_id: "@harutya",
  },
  {
    name: "sakuma",
    t_id: "_Sakuma0331",
  },
  {
    name: "ナナカワ",
    t_id: "7_kawa",
    i_id: "7_kawa",
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
        height: "80vmin",
      }}
    >
      <Stack
        sx={{ width: "max-content", background: "green", borderRadius: 12 }}
      >
        {members.map((member) => {
          return (
            <Stack
              padding={20}
              align="start"
              onClick={() => {
                if (currentTarget !== member.t_id) {
                  setIsFetching(true);
                  setCurrentTarget(member.t_id);
                }
              }}
            >
              {member.name}
              <Stack direction="row" padding={6} spacing={12}>
                {member.t_id && (
                  <a
                    href={`https://twitter.com/${member.t_id}`}
                    target="_blank"
                  >
                    <AiFillTwitterCircle size={30} />
                  </a>
                )}
                {member.i_id && (
                  <a
                    href={`https://instagram.com/${member.i_id}`}
                    target="_blank"
                  >
                    <AiFillInstagram size={30} />
                  </a>
                )}
                {member.y_id && (
                  <a
                    href={`https://youtube.com/${member.y_id}`}
                    target="_blank"
                  >
                    <AiFillYoutube size={30} />
                  </a>
                )}
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
