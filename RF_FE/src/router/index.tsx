import { lazy } from "react";

// Third Party
import { Navigate, useRoutes } from "react-router-dom";

// Components
import { MainLayout } from "../layout/main";
import { AuthRedirect } from "./AuthRedirect";
import { TokenValidationWrapper } from "../layout/wrappers/TokenValidateWrapper";
import NotFoundPage from "../pages/NotFoundPage";
import { ProtectedRoute } from "./ProtectedRoute";

// Pages
const LazyHome = lazy(() => import("../pages/HomePage"));
const LazySpaces = lazy(() => import("../pages/SpacesPage"));
const LazyBookSpace = lazy(() => import("../pages/BookSpace"));
// Pages Owner
const LazyOwner = lazy(() => import("../pages/OwnerPage"));
const LazyEditListing = lazy(
  () => import("../features/space-list/components/EditSpaceList")
);
const LazyOwnerReservations = lazy(
  () => import("../features/profile/components/OwnerReservations")
);
const LazyListYourSpace = lazy(() => import("../pages/ListYourSpace"));
// Pages Driver
const LazyDriver = lazy(() => import("../pages/DriverPage"));

// Pages Profile
const LazyProfileSettings = lazy(
  () => import("../features/profile/components/ProfileSettings")
);
const LazyChangePassword = lazy(
  () => import("../features/profile/components/ProfileChangePassword")
);
// Pages Welcome
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
          path: "/tel-aviv-spaces",
          element: <LazySpaces />,
        },
        {
          path: "/book/:id",
          element: <LazyBookSpace />,
        },
        {
          path: "/space-owner",
          element: (
            <ProtectedRoute>
              <LazyOwner />
            </ProtectedRoute>
          ),
          children: [
            {
              path: "edit/:id",
              element: (
                <ProtectedRoute>
                  <LazyEditListing />
                </ProtectedRoute>
              ),
            },
            {
              path: "your-reservations",
              element: (
                <ProtectedRoute>
                  <LazyOwnerReservations />
                </ProtectedRoute>
              ),
            },
            {
              path: "profile-settings",
              element: (
                <ProtectedRoute>
                  <LazyProfileSettings />
                </ProtectedRoute>
              ),
            },
            {
              path: "change-password",
              element: (
                <ProtectedRoute>
                  <LazyChangePassword />
                </ProtectedRoute>
              ),
            },
          ],
        },
        {
          path: "/driver",
          element: (
            <ProtectedRoute>
              <LazyDriver />
            </ProtectedRoute>
          ),
          children: [
            {
              path: "profile-settings",
              element: (
                <ProtectedRoute>
                  <LazyProfileSettings />
                </ProtectedRoute>
              ),
            },
            {
              path: "change-password",
              element: (
                <ProtectedRoute>
                  <LazyChangePassword />
                </ProtectedRoute>
              ),
            },
          ],
        },
        {
          path: "/list-your-space",
          element: (
            <ProtectedRoute>
              <LazyListYourSpace />
            </ProtectedRoute>
          ),
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
