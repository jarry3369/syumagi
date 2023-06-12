import { Dispatch, Fragment, SetStateAction, useEffect } from "react";
import { Loading } from "@/pages";
import { Timeline as Origin } from "react-twitter-widgets";
import { TimelineProps as OriginType } from "react-twitter-widgets";
import Stack from "../Stack";

type TimelineProps = {
  isFetching: boolean;
  setIsFetching: Dispatch<SetStateAction<boolean>>;
} & OriginType;

export const Timeline = ({
  isFetching,
  setIsFetching,
  ...props
}: TimelineProps) => {
  const { onLoad: _onLoad, ...rest } = props;

  return (
    <Stack
      justify="center"
      align="center"
      sx={
        isFetching
          ? { width: rest.options?.width, height: "100%" }
          : {
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
