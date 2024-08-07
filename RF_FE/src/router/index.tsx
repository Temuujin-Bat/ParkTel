import { lazy } from "react";

// Third Party
import { useRoutes } from "react-router-dom";

// Components
import { MainLayout } from "../layout";
import { AuthRedirect } from "./AuthRedirect";

// Components
const LazyHome = lazy(() => import("../pages/HomePage"));
const LazyLogin = lazy(() => import("../pages/welcome/LoginPage"));
const LazyRegister = lazy(() => import("../pages/welcome/RegisterPage"));
const LazyForgotPassword = lazy(
  () => import("../pages/welcome/ForgotPasswordPage")
);

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
          element: (
            <AuthRedirect>
              <LazyLogin />
            </AuthRedirect>
          ),
        },
        {
          path: "/register",
          element: (
            <AuthRedirect>
              <LazyRegister />
            </AuthRedirect>
          ),
        },
        {
          path: "/forgot-password",
          element: (
            <AuthRedirect>
              <LazyForgotPassword />
            </AuthRedirect>
          ),
        },
      ],
    },
  ]);

export { InitRoutes };
