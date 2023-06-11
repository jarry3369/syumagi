import useSWR from "swr";

import { getMusics } from "@/api";
import Stack from "@/components/Stack";
import { Text } from "@/components/Typography";

export const Home = () => {
  const { data } = useSWR("getMusics", getMusics, {
    onSuccess(res) {
      console.log(res);
    },
  });
  return (
    <Stack>
      {data?.map((d: any) => (
        <Text key={d.name} styleName="subtitle">
          {d.name}
        </Text>
      ))}
    </Stack>
  );
};
export default Home;
