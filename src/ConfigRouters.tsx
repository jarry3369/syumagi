import { useRoutes } from "react-router-dom";

const ConfigRouters = () => {
  const element = useRoutes([
    { path: "/", element: <div>main</div> },
    { path: "/notice/", element: <div>notice</div> },
    { path: "/feed/", element: <div>feed</div> },
  ]);

  return element;
};
export default ConfigRouters;
