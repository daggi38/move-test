import { create } from "zustand";
import { Categories, SubCategory } from "../../../models/categories/categories";

type EntertainmenrSubCategoryStore = {
  entertainmentSubCategory: SubCategory[];

  isBusy: boolean;
  isDataFetched: boolean;
  setSubCategoriesAfterFetch: (data: SubCategory[]) => void;
  setIsBusy: (busy: boolean) => void;
};

export const useentertainmentSubcategoryStore = create<EntertainmenrSubCategoryStore>(
  (set) => ({
    entertainmentSubCategory: [],

    isBusy: false,
    isDataFetched: false,

    setIsBusy: (busy: boolean) => {
      set(() => ({ isBusy: busy }));
    },

    setSubCategoriesAfterFetch: (data: SubCategory[]) => {
      set(() => ({
        entertainmentSubCategory: data,

        isDataFetched: true,
      }));
    },
  })
);
