import { createBrowserRouter } from 'react-router-dom'

import { MainLayout } from '../layouts/mainLayout'
import { DashboardLayout } from '../layouts/dashboardLayout'

import { RegisterPage } from '@/pages/registerPage'
import { ErrorPage } from '@/pages/errorPage'

export const AppRouter = createBrowserRouter(
  [
    {
      path: '/',
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <RegisterPage />,
        },
        {
          path: '/dashboard',
          element: <DashboardLayout />,
          children: [
            {
              index: true,
              path: '/dashboard/main',
              lazy: async () => {
                let { HomePage } = await import('@/pages/dashboard')
                return { Component: HomePage }
              },
            },
            {
              path: '/dashboard/news',
              lazy: async () => {
                let { NewsPage } = await import('@/pages/newsPage')
                return { Component: NewsPage }
              },
            },
            {
              path: '/dashboard/user',
              lazy: async () => {
                let { UserPage } = await import('@/pages/userPage')
                return { Component: UserPage }
              },
            },
            {
              path: '/dashboard/single-crypto',
              lazy: async () => {
                let { SingleCryptoPage } = await import('@/pages/singleCryptoPage')
                return { Component: SingleCryptoPage }
              },
            },
          ],
        },
      ],
    },
  ],
  {
    basename: '/crypto',
  }
)

