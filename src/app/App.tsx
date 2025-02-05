import { RouterProvider } from 'react-router-dom'

import { Providers } from './providers'
import { AppRouter } from './router'

import './styles/index.css'

function App() {
  return (
    <Providers>
      <RouterProvider router={AppRouter} />
    </Providers>
  )
}

export default App
