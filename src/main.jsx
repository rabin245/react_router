import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/Root";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Home from "./routes/Home";
import About, { loader as aboutLoader } from "./routes/About";
import Contact from "./routes/Contact";
import Posts, { loader as postLoader } from "./routes/Posts";
import Post from "./components/Post";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "posts",
        element: <Posts />,
        loader: postLoader,
      },
      {
        path: "posts/:id",
        element: <Post />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "about/:id",
        element: <About />,
        loader: aboutLoader,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);
