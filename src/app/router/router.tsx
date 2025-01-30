import { createBrowserRouter } from "react-router-dom";

import { MainLayout } from "../layouts/mainLayout";

import { RegisterPage } from "@/pages/registerPage";
import { ErrorPage } from "@/pages/errorPage";
import { HomePage } from "@/pages/home";

const Router = createBrowserRouter([
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
        lazy: async () => {
          let { DashboardLayout } = await import("../layouts/dashboardLayout");
          return { Component: DashboardLayout };
        },
        children: [
          {
            index: true,
            element: <HomePage />,
          },
        ],
      },
    ],
  },
]);

export default Router;
