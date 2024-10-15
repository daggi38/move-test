import { useParams } from "react-router";
import Footer from "../../common/components/footer/Footer";
import Header from "../../common/components/header/Header";
import ItemsSection from "./components/items-section/Index";
import useFetchSingleSubCategories from "../../hooks/use-fetch-single-sub-category";
import SeriesHero from "./components/series-hero/Index";
import SeriesDescription from "./components/series-description/Index";
import useFetchSingleSeries from "../../hooks/use-fetch-single-series";

const Series = () => {
  const { id } = useParams<{ id?: string }>();

  const { isBusy,singleSeries ,isDataFetched} = useFetchSingleSeries(id || "");

 

  const isLoading =
  !isDataFetched ||
  !singleSeries || isBusy ;

  return (
    <div className="relative bg-gradient-to-r from-primary to-primary-light min-h-screen min-w-screen max-w-screen">
      <Header />
      <SeriesHero  singleSeries={singleSeries}  />
{/* <SeriesDescription singleSubCategory={singleSubCategory}/> */}
      <ItemsSection SeriesId={singleSeries.id} isLoading={isBusy} />
      <Footer />
    </div>
  );
};

export default Series;
