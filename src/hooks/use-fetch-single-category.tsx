import { instanceWithOutCredential } from "../setup/axios-setup/endpoint-setup";
import { useEffect } from "react";

import { getCategoriesEndpoint } from "../setup/axios-setup/endpoints";
import { useSIngleCategoryStore } from "../setup/state-store/category/store";

const useFetchSingleCategories = (id: string) => {
  const {
    category,
    isBusy,
    setCategoriesAfterFetch,
    setIsBusy,

    subCategory,
    setSubCategoriesAfterFetch,
  } = useSIngleCategoryStore();

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

      setCategoriesAfterFetch(response.data.data);

      setSubCategoriesAfterFetch(response.data.sub_categories);
    } catch (error) {
      console.error("Error fetching category:", error);
    } finally {
      setIsBusy(false);
    }
  }

  return { category, isBusy, subCategory };
};

export default useFetchSingleCategories;
