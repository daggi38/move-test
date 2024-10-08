import { instanceWithOutCredential } from "../setup/axios-setup/endpoint-setup";
import { useEffect } from "react";

import { getCategoriesEndpoint } from "../setup/axios-setup/endpoints";
import { useCategoriesStore } from "../setup/state-store/categories/store";
import { useSIngleCategoryStore } from "../setup/state-store/single-category/store";

const useFetchSingleCategories = () => {
  const {
   category,
    isBusy,
    setCategoriesAfterFetch,

    setIsBusy,
    isDataFetched,
  } = useSIngleCategoryStore();

  useEffect(() => {
    if (!isDataFetched) {
      fetchCategories();
    }
  }, [isDataFetched]);

  async function fetchCategories() {
    try {
      setIsBusy(true);
      const response = await instanceWithOutCredential.get(
        `${getCategoriesEndpoint}/${"5f86ccc2-847e-11ef-8099-dc996942118f"}`
      );

      setCategoriesAfterFetch(response.data.data);
    } catch (error) {
    } finally {
      setIsBusy(false);
    }
  }

  return { category, isBusy, };
};

export default useFetchSingleCategories;
