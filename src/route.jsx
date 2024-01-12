import Data from "./Data";
import Home from "./Home";
import { createBrowserRouter } from "react-router-dom";
const route = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/data",
        element: <Data />,
      },
    ],
  },
]);
export default route;
