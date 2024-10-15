import { create } from "zustand";
import {
  Categories,
  Series,
  SubCategory,
} from "../../../models/categories/categories";

type SubCategoryStore = {
  series: Series;
  subCategory: SubCategory;

  isBusy: boolean;
  isDataFetched: boolean;
  setSeriesAfterFetch: (data: Series) => void;
  setSubCategoryAfterFetch: (data: SubCategory) => void;
  setIsBusy: (busy: boolean) => void;
};

export const useSubCategoryStore = create<SubCategoryStore>(
  (set) => ({
    subCategory: {
      id: "",
      title: "",
      description: "",
      category_id: "",
      images: [],
      short_desc: ""
    },
    series: {
      id: "",
      title: "",
      description: "",
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

    setSubCategoryAfterFetch: (data: SubCategory) => {
      set(() => ({
        subCategory: data,

        isDataFetched: true,
      }));
    },
  })
);
