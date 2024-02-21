import { useState } from "react";
import { UseForm } from "../types/types";

export const useForm = <T,>(initialForm: T): UseForm<T> => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name } = e.target as HTMLInputElement;
    switch (e.target.type) {
      case "file":
        setFormState({
          ...formState,
          [name]: e.target.files![0],
        });
        break;
      default:
        setFormState({
          ...formState,
          [name]: e.target.value,
        });
        break;
    }
  };

  const onInputChangeTextArea = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const { name } = e.target as HTMLTextAreaElement;
    setFormState({
      ...formState,
      [name]: e.target.value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    formState,
    onInputChange,
    onInputChangeTextArea,
    onResetForm,
  };
};
