import { createBrowserRouter } from "react-router-dom";
import Layout from "../../pages/Layout";
import Main from "../../pages/main/Index";
import ThankYou from "../../pages/thank-you/Index";
import Subcategory from "../../pages/sub-catagory/Index";
import Category from "../../pages/catagory/Index";
import Detail from "../../pages/detail/Index";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/category/:id", 
        element: <Category />,
      },
      {
        path: "/subcategory/:id",
        element: <Subcategory />,
      },
      {
        path: "/thank-you",
        element: <ThankYou />,
      },
      {
        path: "/detail",
        element: <Detail />,
      },
    ],
  },
]);
