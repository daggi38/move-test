import { createBrowserRouter } from "react-router-dom";
import Layout from "../../pages/Layout";
import Main from "../../pages/main/Index";


import ThankYou from "../../pages/thank-you/Index";
import Subcategory from "../../pages/sub-catagory/Index";
import Category from "../../pages/catagory/Index";


export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
    
      {
        path: "/category",
        element: <Category />,
      },
    
      {
        path: "/subcategory",
        element: <Subcategory />,
      },
      {
        path: "/thank-you",
        element: <ThankYou/>,
      },
    ],
  },
]);
