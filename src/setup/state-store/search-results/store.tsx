import { create } from "zustand";

import { SearchResult } from "../../../models/search-results/search-results";

type SearchResultsStore = {
  searchResults: SearchResult[];

  isBusy: boolean;
  isDataFetched: boolean;
  setSearchResults: (data: SearchResult[]) => void;
  setIsBusy: (busy: boolean) => void;
};

export const useSearchResultsStore = create<SearchResultsStore>((set) => ({
  searchResults: [],

  isBusy: false,
  isDataFetched: false,

  setIsBusy: (busy: boolean) => {
    set(() => ({ isBusy: busy }));
  },

  setSearchResults: (data: SearchResult[]) => {
    set(() => ({
      searchResults: data,

      isDataFetched: true,
    }));
  },
}));
