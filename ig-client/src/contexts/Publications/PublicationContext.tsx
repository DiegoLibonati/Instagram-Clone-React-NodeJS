import { createContext, useState } from "react";
import { instagramApiCreatePublication } from "../../api/Publication/instagramApiCreatePublication";
import { useForm } from "../../hooks/useForm";
import { Publication } from "../../types/types";

interface PublicationContextProps {
  children: React.ReactNode;
}

export const PublicationContext = createContext<null | any>(null);

export const PublicationProvider: React.FunctionComponent<
  PublicationContextProps
> = ({ children }) => {
  const [activePublication, setActivePublication] = useState<Publication>({
    id: "",
    imgLink: "",
    description: "",
    likes: [],
    comments: [],
    date: "",
    username: "",
    avatar: "",
    name: "",
  });

  const { formState, onInputChange, onResetForm } = useForm({
    id: "",
    imgLink: "",
    description: "",
    likes: JSON.stringify([]),
    comments: JSON.stringify([]),
    date: "",
  });

  const handleNewPublication = async (username: string) => {
    formState["id"] = (new Date().getTime() * 2).toString();
    formState["date"] = new Date().getTime();

    const request = await instagramApiCreatePublication(username, formState);

    const message = request.message;
    const payload = request.payload;

    onResetForm();

    return {
      message,
      payload,
    };
  };

  return (
    <PublicationContext.Provider
      value={{
        formState,
        activePublication,
        setActivePublication,
        onInputChange,
        onResetForm,
        handleNewPublication,
      }}
    >
      {children}
    </PublicationContext.Provider>
  );
};
