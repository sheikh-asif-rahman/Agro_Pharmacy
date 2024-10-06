import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import HomePage from "./pages/HomePage.jsx";
// import AboutLabaid from "./pages/AboutLabaid.jsx";
// import ConsultantsPage from "./pages/ConsultantsPage.jsx";
// import OurServicePage from "./pages/OurServicePage.jsx";
// import BlogsReading from "./pages/BlogsReading.jsx";
// import BlogsWriting from "./pages/BlogsWriting.jsx";
// import DetailsPage from "./pages/DetailsPage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  // {
  //   path: "aboutlabaid",
  //   element: <AboutLabaid />,
  // },
  // {
  //   path: "homepage",
  //   element: <HomePage />,
  // },
  // {
  //   path: "consultantspage",
  //   element: <ConsultantsPage />,
  // },
  // {
  //   path: "ourservicepage",
  //   element: <OurServicePage />,
  // },
  // {
  //   path: "blogsreading",
  //   element: <BlogsReading />,
  // },
  // {
  //   path: "blogswriting",
  //   element: <BlogsWriting />,
  // },
  // {
  //   path: "detailspage",
  //   element: <DetailsPage />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
