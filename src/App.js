import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./components/layout/RootLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { GithubProvider } from "./context/Github/GithubContext";
import User from "./pages/User";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/user/:login",
        element: <User />,
      },
      {
        path: "/notfound",
        element: <ErrorPage />,
      },
      {
        path: "/*",
        element: <ErrorPage />,
      },
    ],
  },
]);
function App() {
  return (
    <GithubProvider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer theme="dark" position="bottom-right" autoClose={2000} />
    </GithubProvider>
  );
}

export default App;
