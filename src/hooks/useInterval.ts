import { useEffect, useRef } from "react";

import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";

function useInterval(
  callback: () => void,
  delay: number | null,
  flag?: boolean
) {
  const savedCallback = useRef(callback);

  useIsomorphicLayoutEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!delay && delay !== 0) {
      return;
    }

    const id = setInterval(() => savedCallback.current(), delay);

    if (flag) clearInterval(id);
    return () => clearInterval(id);
  }, [delay, flag]);
}

export default useInterval;
