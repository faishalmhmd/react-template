import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Main from "./routes/main/index.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <RouterProvider router={router} />
)
