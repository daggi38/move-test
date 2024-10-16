import { create } from "zustand";
import {
  instance,
  instanceWithOutCredential,
} from "../axios-setup/endpoint-setup";

type EmailSubscriptionStore = {
  isLoading: boolean;
  isSuccess: boolean;
  errorMessage: string;
  email: string;

  setIsLoading: (status: boolean) => void;
  setSuccess: (status: boolean) => void;
  setErrorMessage: (message: string) => void;
  setEmail: (email: string) => void;
};

export const useEmailSubscriptionStore = create<EmailSubscriptionStore>(
  (set) => ({
    isLoading: false,
    isSuccess: false,
    errorMessage: "",
    email: "",

    setIsLoading: (status) => {
      set({ isLoading: status });
    },
    setSuccess: (status) => {
      set({ isSuccess: status });
    },
    setErrorMessage: (message) => {
      set({ errorMessage: message });
    },
    setEmail: (email) => {
      set({ email });
    },
  })
);

export const subscribeEmail = async (email: string) => {
  const setIsLoading = useEmailSubscriptionStore.getState().setIsLoading;
  const setSuccess = useEmailSubscriptionStore.getState().setSuccess;
  const setErrorMessage = useEmailSubscriptionStore.getState().setErrorMessage;

  setIsLoading(true);

  try {
    const response = await instanceWithOutCredential.post("/subscribe", {
      email,
    });

    if (response.data.success) {
      setSuccess(true);
    } else {
      setSuccess(false);
      setErrorMessage(response.data.message || "Subscription failed.");
    }
  } catch (error: any) {
    setSuccess(false);

    if (error.response) {
      if (error.response.status === 400) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage(
          error.response.data.message || "An error occurred. Please try again."
        );
      }
    } else {
      setErrorMessage(
        "An unexpected error occurred. Please check your network connection."
      );
    }
  } finally {
    setIsLoading(false);
  }
};
