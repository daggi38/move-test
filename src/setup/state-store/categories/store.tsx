import { create } from "zustand";
import { Categories } from "../../../models/categories/categories";

type CategoriesStore = {
  categories: Categories[];
  fitnessCategory: Categories | null;
  entertainmentCategory: Categories | null;
  isBusy: boolean;
  isDataFetched: boolean;
  setCategoriesAfterFetch: (data: Categories[]) => void;
  setIsBusy: (busy: boolean) => void;
};

export const useCategoriesStore = create<CategoriesStore>((set) => ({
  categories: [],
  fitnessCategory: null,
  entertainmentCategory: null,
  isBusy: false,
  isDataFetched: false,

  setIsBusy: (busy: boolean) => {
    set(() => ({ isBusy: busy }));
  },

  setCategoriesAfterFetch: (data: Categories[]) => {
    const fitnessCategory =
      data.find((category) => category.title.toLowerCase() === "fitness") ||
      null;
    const entertainmentCategory =
      data.find(
        (category) => category.title.toLowerCase() === "entertainment"
      ) || null;

    set(() => ({
      categories: data,
      fitnessCategory,
      entertainmentCategory,
      isDataFetched: true,
    }));
  },
}));
