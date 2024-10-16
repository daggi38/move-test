import { instanceWithOutCredential } from "../setup/axios-setup/endpoint-setup";
import { useEffect } from "react";

import { getSubCategoriesEndpint } from "../setup/axios-setup/endpoints";
import { useSIngleSubCategoryStore } from "../setup/state-store/sub-category/single-sub-category";

const useFetchSingleSubCategories = (id: string) => {
  const {
    series,
    isDataFetched,
    setSeriesAfterFetch,
    isBusy,

    setIsBusy,
    setSingleSubCategoriesAfterFetch,
    singleSubCategory,
  } = useSIngleSubCategoryStore();

  useEffect(() => {
    if (id) {
      fetchSingleSubCategory(id);
    }
  }, [id]);

  async function fetchSingleSubCategory(subCategoryId: string) {
    try {
      setIsBusy(true);
      const response = await instanceWithOutCredential.get(
        `${getSubCategoriesEndpint}/${subCategoryId}`
      );

      setSingleSubCategoriesAfterFetch(response.data.data);

      setSeriesAfterFetch(response.data.series);
    } catch (error) {
      console.error("Error fetching category:", error);
    } finally {
      setIsBusy(false);
    }
  }

  return { isBusy, singleSubCategory ,series ,isDataFetched};
};

export default useFetchSingleSubCategories;
