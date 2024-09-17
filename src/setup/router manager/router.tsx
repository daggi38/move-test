import { createBrowserRouter } from "react-router-dom";
import Layout from "../../pages/Layout";
import Main from "../../pages/main/Index";


import ThankYou from "../../pages/thank-you/Index";
import Catagory from "../../pages/catagory/Index";
import Subcatagory from "../../pages/sub-catagory/Index";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
    
      {
        path: "/catagory",
        element: <Catagory />,
      },
    
      {
        path: "/subcatagory",
        element: <Subcatagory />,
      },
      {
        path: "/thank-you",
        element: <ThankYou/>,
      },
    ],
  },
]);
