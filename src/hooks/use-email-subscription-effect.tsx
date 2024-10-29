import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useEmailSubscriptionStore } from "../setup/state-store/email-subscription";

const useEmailSubscriptionEffect = () => {
  const navigate = useNavigate();

  const { isSuccess, errorMessage,  setSuccess, isLoading } =
    useEmailSubscriptionStore();

  useEffect(() => {
    if (isSuccess) {

      navigate("/thank-you");
      setSuccess(false);
    } else if (errorMessage) {
    }
  }, [isSuccess]);
  return { isSuccess, isLoading ,errorMessage };
};

export default useEmailSubscriptionEffect;
