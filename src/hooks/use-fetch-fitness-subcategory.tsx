import { instanceWithOutCredential } from "../setup/axios-setup/endpoint-setup";
import { useEffect } from "react";

import { getCategoriesEndpoint } from "../setup/axios-setup/endpoints";
import { useFitnessSubcategoryStore } from "../setup/state-store/sub-category/fitness-sub-category";

const useFetchFitnessSubCategories = (id: string) => {
  const {
    isBusy,
    setIsBusy,
fitnessSubCategory,
isDataFetched,
   
    setSubCategoriesAfterFetch,
  } = useFitnessSubcategoryStore();

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

  return { isDataFetched, isBusy, fitnessSubCategory };
};

export default useFetchFitnessSubCategories;
