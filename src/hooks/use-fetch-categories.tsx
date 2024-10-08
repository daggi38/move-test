import { instanceWithOutCredential } from "../setup/axios-setup/endpoint-setup";
import { useEffect } from "react";

import { getCategoriesEndpoint,  } from "../setup/axios-setup/endpoints";
import { useCategoriesStore } from "../setup/state-store/categories/store";

const useFetchCategories = () => {
  const {
    entertainmentCategory,
    fitnessCategory,

   categories,
    isBusy, 
    setCategoriesAfterFetch,

    setIsBusy,
    isDataFetched,
  } = useCategoriesStore();

  useEffect(() => {
    if (!isDataFetched) {
      fetchCategories();
    }
  }, [isDataFetched]);

  async function fetchCategories() {
    try {
      setIsBusy(true);
      const response = await instanceWithOutCredential.get(getCategoriesEndpoint, {
        
      });

      setCategoriesAfterFetch(response.data.data);
    } catch (error) {
    
    } finally {
      setIsBusy(false);
    }
  }

  return {categories  , isBusy , fitnessCategory,entertainmentCategory};
};

export default useFetchCategories;
