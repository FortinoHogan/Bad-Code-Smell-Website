import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./Views/HomePage";
import { ThemeProvider } from "./Context/DarkModeContext";
import ContentPage from "./Views/ContentPage";
import ChangePreventers from "./Views/ChangePreventers";
import Dispensables from "./Views/Dispensables";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/content",
    element: <ContentPage />,
  },
  {
    path: "/changePreventers",
    element: <ChangePreventers />,
  },
  { path: "/dispensables", 
    element: <Dispensables /> 
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  </React.StrictMode>
);
