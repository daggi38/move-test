import { useSearchParams } from "react-router-dom";
import Header from "../../common/components/header/Header";
import useFetchSearchResults from "../../hooks/use-fetch-search-results";
import SearchResultsSection from "./components/search-results-section/Index";

const SearchResults = () => {

  const [searchParams] = useSearchParams();
  const query = searchParams.get("q"); 

  const{ isBusy,searchResults}=useFetchSearchResults(query || "")

  return (
    <div className="relative bg-gradient-to-r from-primary to-primary-light min-h-screen min-w-screen max-w-screen">
      <Header />
      <SearchResultsSection searchResults={searchResults} isLoading={isBusy}  />
    </div>
  );
};

export default SearchResults;
