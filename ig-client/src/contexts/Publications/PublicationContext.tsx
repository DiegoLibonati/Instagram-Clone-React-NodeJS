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
    _id: "",
    imgLink: "",
    description: "",
    likes: [],
    comments: [],
    date: "",
    username: "",
    avatar: "",
    name: "",
    idAuthor: "",
    context: "",
  });

  const { formState, onInputChange, onResetForm } = useForm({
    imgLink: "",
    description: "",
    date: "",
  });

  const handleNewPublication = async () => {
    formState["date"] = new Date().getTime();

    const request = await instagramApiCreatePublication(formState);

    const message = request.message;
    const publication = request.publication;

    onResetForm();

    return {
      message,
      publication,
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
