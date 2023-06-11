import { useRoutes } from "react-router-dom";
import { Home, Notice, Tweets, NotFound, Loading } from "@/pages";
import GnbLayout from "./layout/gnb_layout";
import { Suspense } from "react";

const ConfigRouters = () => {
  const element = useRoutes([
    {
      element: <GnbLayout />,
      children: [
        {
          path: "/",
          element: (
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "/notice/",
          element: <Notice />,
        },
        {
          path: "/tweets/",
          element: <Tweets />,
        },
      ],
    },

    { path: "*", element: <NotFound /> },
  ]);

  return element;
};
export default ConfigRouters;
