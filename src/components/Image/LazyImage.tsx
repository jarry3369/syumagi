import { lazy } from "react";
export const LazyImage = lazy(() => import("./Image"));
export default LazyImage;
