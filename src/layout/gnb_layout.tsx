import NavigationBar from "@/components/NavigationBar";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import Stack from "@/components/Stack";

const nav_contents: Array<TNavContent> = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/tweets",
    label: "Tweets",
  },
  {
    path: "/notice",
    label: "notice",
  },
];

const GnbLayout = () => {
  return (
    <Fragment>
      <NavigationBar items={nav_contents} />
      <Stack
        justify="center"
        padding={"84px 0 0 "}
        sx={{ overflow: "scroll", height: "calc(100vh - 84px)" }}
      >
        <Outlet />
      </Stack>
    </Fragment>
  );
};

export default GnbLayout;
