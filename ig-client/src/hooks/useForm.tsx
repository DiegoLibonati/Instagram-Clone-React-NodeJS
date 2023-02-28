import { useState } from "react";

export const useForm = (initialForm: Record<string, any>) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = (e: React.ChangeEvent<any>) => {
    const { name } = e.target;
    switch (e.target.type) {
      case "file":
        setFormState({
          ...formState,
          [name]: e.target.files[0],
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

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    formState,
    onInputChange,
    onResetForm,
  };
};
