import React, { Dispatch, Fragment, SetStateAction, Suspense } from "react";
import { Loading } from "@/pages";
import { Timeline as Origin } from "react-twitter-widgets";
import { TimelineProps as OriginType } from "react-twitter-widgets";

type TimelineProps = {
  isFetching: boolean;
  setIsFetching: Dispatch<SetStateAction<boolean>>;
} & OriginType;

export const Timeline = ({
  isFetching,
  setIsFetching,
  ...props
}: TimelineProps) => {
  const LoadSkeleton = ({ options }: Pick<OriginType, "options">) => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: options?.width,
          height: options?.height,
        }}
      >
        <Loading />
      </div>
    );
  };

  const { onLoad: _onLoad, options: _options, ...rest } = props;
  return (
    <Fragment>
      {/* {isFetching ? <LoadSkeleton options={_options} /> : <Fragment />} */}

      <Suspense fallback={<LoadSkeleton options={_options} />}>
        <Origin
          onLoad={() => {
            setIsFetching(false);
            _onLoad && _onLoad();
          }}
          options={
            isFetching
              ? {
                  width: 0,
                  height: 0,
                }
              : _options ?? {}
          }
          {...rest}
        />
      </Suspense>
    </Fragment>
  );
};

export default Timeline;
