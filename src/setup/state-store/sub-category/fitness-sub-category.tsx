import { create } from "zustand";
import { Categories, SubCategory } from "../../../models/categories/categories";

type FitnessSubCategoryStore = {
  fitnessSubCategory: SubCategory[];

  isBusy: boolean;
  isDataFetched: boolean;
  setSubCategoriesAfterFetch: (data: SubCategory[]) => void;
  setIsBusy: (busy: boolean) => void;
};

export const useFitnessSubcategoryStore = create<FitnessSubCategoryStore>(
  (set) => ({
    fitnessSubCategory: [
      {
        id: "",
        title: "",
        description: "",
        category_id: "",
        images: [],
        short_desc: "",
      },
    ],

    isBusy: false,
    isDataFetched: false,

    setIsBusy: (busy: boolean) => {
      set(() => ({ isBusy: busy }));
    },

    setSubCategoriesAfterFetch: (data: SubCategory[]) => {
      set(() => ({
        fitnessSubCategory: data,

        isDataFetched: true,
      }));
    },
  })
);
