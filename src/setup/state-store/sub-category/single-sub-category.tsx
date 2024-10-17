import { create } from "zustand";
import { Series, SubCategory } from "../../../models/categories/categories";

type SubCategoryStore = {
  series: Series[];
  subCategory: SubCategory;

  isBusy: boolean;
  isDataFetched: boolean;
  tagItems: string[]; 
  setSeriesAfterFetch: (data: Series[]) => void;
  setSubCategoryAfterFetch: (data: SubCategory) => void;
  setIsBusy: (busy: boolean) => void;
};

export const useSubCategoryStore = create<SubCategoryStore>((set) => ({
  series: [],
  subCategory: {
    id: "",
    title: "",
    description: "",
    category_id: "",
    images: [],
    short_desc: "",
  },
  isBusy: false,
  isDataFetched: false,
  tagItems: [],

  setIsBusy: (busy: boolean) => {
    set(() => ({ isBusy: busy }));
  },

  setSeriesAfterFetch: (data: Series[]) => {
    const uniqueTags = new Set<string>();

    data.forEach((seriesItem) => {
      seriesItem.tags.forEach((tag) => {
        uniqueTags.add(tag.title);
      });
    });

    set(() => ({
      series: data,
      tagItems: Array.from(uniqueTags), 
      isDataFetched: true,
    }));
  },

  setSubCategoryAfterFetch: (data: SubCategory) => {
    set(() => ({
      subCategory: data,
      isDataFetched: true,
    }));
  },
}));
