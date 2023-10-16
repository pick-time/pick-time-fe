import { useState } from "react";

interface InputForm {
  type: string;
  isDisabled?: boolean;
  providerName: string;
  consumerName: string;
}

interface InputFormErrors {
  providerNameError: string;
  consumerNameError: string;
}

const useInputFormValidation = (): [
  InputForm,
  InputFormErrors,
  (data: InputForm) => void,
] => {
  const [form, setForm] = useState<InputForm>({
    type: "",
    providerName: "",
    consumerName: "",
  });
  const [errors, setErrors] = useState<InputFormErrors>({
    providerNameError: "",
    consumerNameError: "",
  });

  const validateProviderName = (providerName: string): string => {
    if (providerName.length === 0) {
      return "주는 사람 이름을 입력해주세요.";
    }
    return "";
  };

  const validateConsumerName = (consumerName: string): string => {
    if (consumerName.length === 0) {
      return "받는 사람 이름을 입력해주세요.";
    }
    return "";
  };

  const handleFormChange = (data: InputForm) => {
    const { type, providerName, consumerName } = data;
    setForm(data);
    if (type === "provider") {
      setErrors({
        ...errors,
        providerNameError: validateProviderName(providerName),
      });
    }
    if (type === "consumer") {
      setErrors({
        ...errors,
        consumerNameError: validateConsumerName(consumerName),
      });
    }
    if (type === "all") {
      setErrors({
        ...errors,
        providerNameError: validateProviderName(providerName),
        consumerNameError: validateConsumerName(consumerName),
      });
    }
  };

  return [form, errors, handleFormChange];
};

export default useInputFormValidation;
