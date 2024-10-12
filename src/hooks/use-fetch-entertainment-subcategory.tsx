import { instanceWithOutCredential } from "../setup/axios-setup/endpoint-setup";
import { useEffect } from "react";

import { getCategoriesEndpoint } from "../setup/axios-setup/endpoints";
import { useFitnessSubcategoryStore } from "../setup/state-store/sub-category/fitness-sub-category";
import { useentertainmentSubcategoryStore } from "../setup/state-store/sub-category/entertainment-sub-categories.";

const useFetchEntertainmentSubCategories = (id: string) => {
  const {
    isBusy,
    setIsBusy,
    entertainmentSubCategory,
    isDataFetched,

    setSubCategoriesAfterFetch,
  } = useentertainmentSubcategoryStore();

  useEffect(() => {
    if (id) {
      fetchCategory(id);
    }
  }, [id]);

  async function fetchCategory(categoryId: string) {
    try {
      setIsBusy(true);
      const response = await instanceWithOutCredential.get(
        `${getCategoriesEndpoint}/${categoryId}`
      );

      setSubCategoriesAfterFetch(response.data.sub_categories);
    } catch (error) {
      console.error("Error fetching category:", error);
    } finally {
      setIsBusy(false);
    }
  }

  return { isDataFetched, isBusy, entertainmentSubCategory};
};

export default useFetchEntertainmentSubCategories;
