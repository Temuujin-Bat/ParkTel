import { lazy } from "react";

// Third Party
import { Navigate, useRoutes } from "react-router-dom";

// Components
import { MainLayout } from "../layout/main";
import { AuthRedirect } from "./AuthRedirect";
import { TokenValidationWrapper } from "../layout/wrappers/TokenValidateWrapper";
import NotFoundPage from "../pages/NotFoundPage";

// Pages
const LazyHome = lazy(() => import("../pages/HomePage"));
const LazyLogin = lazy(() => import("../pages/welcome/LoginPage"));
const LazyRegister = lazy(() => import("../pages/welcome/RegisterPage"));
const LazyForgotPassword = lazy(
  () => import("../pages/welcome/ForgotPasswordPage")
);
const LazyResetPassword = lazy(
  () => import("../pages/welcome/ResetPasswordPage")
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
        {
          path: "/reset-password/:token",
          element: (
            <TokenValidationWrapper>
              <LazyResetPassword />
            </TokenValidationWrapper>
          ),
        },
        {
          path: "not-found",
          element: <NotFoundPage />,
        },
        {
          path: "*",
          element: <Navigate to="/not-found" replace />,
        },
      ],
    },
  ]);

export { InitRoutes };
