import { create } from "zustand";
import { Categories, SubCategory } from "../../../models/categories/categories";

type SingleCategoryStore = {
  category: Categories;
  subCategory:SubCategory[];
 
  isBusy: boolean;
  isDataFetched: boolean;
  setCategoriesAfterFetch: (data: Categories) => void;
  setSubCategoriesAfterFetch: (data: SubCategory[]) => void;
  setIsBusy: (busy: boolean) => void;
};

export const useSIngleCategoryStore = create<SingleCategoryStore>((set) => ({
  subCategory:[],

  category: {
    id: "",
    title: "",
    short_desc: "",
    page_title: "",
    page_sub_title: "",
    description: "",
    sub_categories: []
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
  setSubCategoriesAfterFetch: (data: SubCategory[]) => {


    set(() => ({
      subCategory: data,
     
      isDataFetched: true,
    }));
  },
}));