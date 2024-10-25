import { create } from "zustand";
import {
  Categories,
  Series,
  SubCategory,
} from "../../../models/categories/categories";

type SeriesStore = {
  series: Series;

  isBusy: boolean;
  isDataFetched: boolean;
  setSeriesAfterFetch: (data: Series) => void;
  setIsBusy: (busy: boolean) => void;
};

export const useSeriesStore = create<SeriesStore>((set) => ({
  series: {
    id: "",
    title: "",
    description: "",
    tags: []
  },

  isBusy: false,
  isDataFetched: false,

  setIsBusy: (busy: boolean) => {
    set(() => ({ isBusy: busy }));
  },

  setSeriesAfterFetch: (data: Series) => {
    set(() => ({
      series: data,

      isDataFetched: true,
    }));
  },
}));
