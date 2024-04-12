import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './pages/Root'
import Home from './pages/Home'

const router = createBrowserRouter(
  [
    {
      path:'https://lukesgon.github.io/portfolio/',
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
