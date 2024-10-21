import { instanceWithOutCredential } from "../setup/axios-setup/endpoint-setup";
import { useEffect } from "react";
import { getSearchResultsEndpoint } from "../setup/axios-setup/endpoints";
import { useSearchResultsStore } from "../setup/state-store/search-results/store";

const useFetchSearchResults = (query: string) => {
  const { isBusy, isDataFetched, searchResults, setIsBusy, setSearchResults } =
    useSearchResultsStore();

  useEffect(() => {
    if (query) {
      fetchSearchResults(query);
    }
  }, [query]);

  async function fetchSearchResults(searchQuery: string) {
    try {
      setIsBusy(true); // Set loading state to true before fetching data

      const response = await instanceWithOutCredential.get(
        `${getSearchResultsEndpoint}?q=${searchQuery}`
      );

      // Assuming the response data contains the search results
      setSearchResults(response.data); // Set the fetched search results

    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setIsBusy(false); // Set loading state to false after fetching is complete
    }
  }

  return { isBusy, isDataFetched, searchResults };
};

export default useFetchSearchResults;
