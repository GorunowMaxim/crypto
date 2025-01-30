import { createBrowserRouter } from "react-router-dom";

import { MainLayout } from "../layouts/mainLayout";

import { RegisterPage } from "@/pages/registerPage";
import { ErrorPage } from "@/pages/errorPage";
import { HomePage } from "@/pages/home";
import { DashboardLayout } from "../layouts/dashboardLayout";

const Router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <RegisterPage />,
        },
        {
          path: "/dashboard",
          element: <DashboardLayout />,
          children: [
            {
              index: true,
              element: <HomePage />,
            },
          ],
        },
      ],
    },
  ],
  {
    basename: "/crypto",
  }
);

export default Router;
