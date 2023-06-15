import { Fragment } from "react";
import { Timeline as Origin } from "react-twitter-widgets";
import { TimelineProps as OriginType } from "react-twitter-widgets";

import { Loading } from "@/pages";

import Stack from "@/components/Stack";

export const Timeline = ({
  isFetching,
  setIsFetching,
  ...props
}: OriginType & TimelineProps) => {
  const { onLoad: _onLoad, ...rest } = props;

  return (
    <Stack
      justify="center"
      align="center"
      sx={
        isFetching
          ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            { width: rest.options?.width, height: "100%" }
          : {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              width: rest.options?.width,
              justifyContent: "start",
              height: "100%",
            }
      }
    >
      {isFetching || !document.getElementsByClassName("twitter-timeline")[0] ? (
        <Loading />
      ) : (
        <Fragment />
      )}

      <Origin
        onLoad={async () => {
          if (_onLoad) await _onLoad();
          setIsFetching(false);
        }}
        {...rest}
      />
    </Stack>
  );
};

export default Timeline;
