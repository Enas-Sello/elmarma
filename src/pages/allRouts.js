import React from "react"
import { createBrowserRouter } from "react-router-dom"
import Matches from "./Matches"
import Posts from "./Posts"
import Root from "./Root"

export const Routs = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <p>error</p>,
    children: [
      {
        index: true,
        element: <Posts />,
      },
      {
        path: "matches",
        element: <Matches />,
      },
    ],
  },
])
