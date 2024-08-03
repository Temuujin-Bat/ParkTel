import { lazy } from "react";

// Third Party
import { useRoutes } from "react-router-dom";

// Components
import { MainLayout } from "../layout";

// Components
const LazyHome = lazy(() => import("../pages/HomePage"));
const LazyLogin = lazy(() => import("../pages/welcome/LoginPage"));

const InitRoutes = () =>
  useRoutes([
    {
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <LazyHome />,
        },
        {
          path: "/login",
          element: <LazyLogin />,
        },
      ],
    },
  ]);

export { InitRoutes };
