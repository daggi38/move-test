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

  const { isBusy, series, isDataFetched } = useFetchSingleSeries(id || "");

  return (
    <div className="relative bg-gradient-to-r from-primary to-primary-light min-h-screen min-w-screen max-w-screen">
      <Header />
      <SeriesHero series={series} isLoading={isBusy} />
      <SeriesDescription series={series} />
      <ItemsSection SeriesId={series.id} isLoading={isBusy} />
      <Footer />
    </div>
  );
};

export default Series;
