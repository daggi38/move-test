import { createBrowserRouter } from "react-router-dom";
import Layout from "../../pages/Layout";
import Main from "../../pages/main/Index";
import FitnessPage from "../../pages/fitness/Index";
import EntertainmentPage from "../../pages/entertaiment/Index";
import EntertainmentDetail from "../../pages/entertainment-detail/Index";
import FitnessDetail from "../../pages/fitness-detail/Index";
import ThankYou from "../../pages/thank-you/Index";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/fitness",
        element: <FitnessPage />,
      },
      {
        path: "/entertaiment",
        element: <EntertainmentPage />,
      },
      {
        path: "/entertainment-detail",
        element: <EntertainmentDetail />,
      },
      {
        path: "/fitness-detail",
        element: <FitnessDetail />,
      },
      {
        path: "/thank-you",
        element: <ThankYou/>,
      },
    ],
  },
]);
