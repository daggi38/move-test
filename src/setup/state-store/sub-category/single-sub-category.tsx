import { create } from "zustand";
import {
  Categories,
  Series,
  SubCategory,
} from "../../../models/categories/categories";

type SingleSubCategoryStore = {
  series: Series;
  singleSubCategory: SubCategory;

  isBusy: boolean;
  isDataFetched: boolean;
  setSeriesAfterFetch: (data: Series) => void;
  setSingleSubCategoriesAfterFetch: (data: SubCategory) => void;
  setIsBusy: (busy: boolean) => void;
};

export const useSIngleSubCategoryStore = create<SingleSubCategoryStore>(
  (set) => ({
    singleSubCategory: {
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

    setSingleSubCategoriesAfterFetch: (data: SubCategory) => {
      set(() => ({
        singleSubCategory: data,

        isDataFetched: true,
      }));
    },
  })
);
