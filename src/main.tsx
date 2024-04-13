import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import Root from './pages/Root'
import Home from './pages/Home'

const router = createHashRouter(
  [
    {
      path:'/',
      element: <Root />,
      children: [
        {
          path:'/',
          element: <Home />
        }
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={ router } />
  </React.StrictMode>,
)
