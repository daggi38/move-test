import { create } from "zustand";
import {
  Categories,
  Series,
  SubCategory,
} from "../../../models/categories/categories";

type SingleSeriesStore = {
  singleSeries: Series;
  //singleSubCategory: SubCategory;

  isBusy: boolean;
  isDataFetched: boolean;
  setSingleSeriesAfterFetch: (data: Series) => void;
 // setSingleSubCategoriesAfterFetch: (data: SubCategory) => void;
  setIsBusy: (busy: boolean) => void;
};

export const useSIngleSeriesStore = create<SingleSeriesStore>(
  (set) => ({
    // singleSubCategory: {
    //   id: "",
    //   title: "",
    //   description: "",
    //   category_id: "",
    //   images: [],
    //   short_desc: ""
    // },
    singleSeries: {
      id: "",
      title: "",
      description: "",
    },

    isBusy: false,
    isDataFetched: false,

    setIsBusy: (busy: boolean) => {
      set(() => ({ isBusy: busy }));
    },

    setSingleSeriesAfterFetch: (data: Series) => {
      set(() => ({
        singleSeries: data,

        isDataFetched: true,
      }));
    },

    // setSingleSubCategoriesAfterFetch: (data: SubCategory) => {
    //   set(() => ({
    //     singleSubCategory: data,

    //     isDataFetched: true,
    //   }));
    // },
  })
);
