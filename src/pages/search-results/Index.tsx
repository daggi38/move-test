import { useSearchParams } from "react-router-dom";
import Footer from "../../common/components/footer/Footer";
import Header from "../../common/components/header/Header";
import HomeHeroDescription from "../../common/components/hero-component/HomeHeroDescription";
import useFetchSearchResults from "../../hooks/use-fetch-search-results";
import SearchResultsSection from "./components/search-results-section/Index";

const SearchResults = () => {

  const [searchParams] = useSearchParams();
  const query = searchParams.get("q"); 

  const{ isBusy,isDataFetched,searchResults}=useFetchSearchResults(query)

  return (
    <div className="relative bg-gradient-to-r from-primary to-primary-light min-h-screen min-w-screen max-w-screen">
      <Header />
      <SearchResultsSection searchResults={searchResults} isLoading={false}  />
    </div>
  );
};

export default SearchResults;
