import { create } from "zustand";
import { Categories } from "../../../models/categories/categories";

type SingleCategoryStore = {
  category: Categories;
 
  isBusy: boolean;
  isDataFetched: boolean;
  setCategoriesAfterFetch: (data: Categories) => void;
  setIsBusy: (busy: boolean) => void;
};

export const useSIngleCategoryStore = create<SingleCategoryStore>((set) => ({
  category: {
      id: "",
      title: "",
      short_des: "",
      page_title: "",
      page_sub_title: "",
      description: ""
  },

  isBusy: false,
  isDataFetched: false,

  setIsBusy: (busy: boolean) => {
    set(() => ({ isBusy: busy }));
  },

  setCategoriesAfterFetch: (data: Categories) => {


    set(() => ({
      category: data,
     
      isDataFetched: true,
    }));
  },
}));