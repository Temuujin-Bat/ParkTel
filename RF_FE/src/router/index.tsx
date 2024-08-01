import { lazy } from "react";

// Third Party
import { useRoutes } from "react-router-dom";
import { MainLayout } from "../layout";

// Components
const LazyHome = lazy(() => import("../pages/HomePage"));

const InitRoutes = () =>
  useRoutes([
    {
      element: <MainLayout />,
      children: [{ path: "/", element: <LazyHome /> }],
    },
  ]);

export { InitRoutes };
