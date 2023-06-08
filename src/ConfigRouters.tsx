import { useRoutes } from "react-router-dom";
import { Home, Notice, Feed } from "@/pages";

const ConfigRouters = () => {
  const element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/notice/", element: <Notice /> },
    { path: "/feed/", element: <Feed /> },
  ]);

  return element;
};
export default ConfigRouters;
