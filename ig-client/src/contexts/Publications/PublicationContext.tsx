import { createContext, useState } from "react";
import { instagramApiCreatePublication } from "../../api/Publication/instagramApiCreatePublication";
import { useForm } from "../../hooks/useForm";
import {
  Publication,
  PublicationContextProps,
  PublicationContextT,
} from "../../types/types";

export const PublicationContext = createContext<PublicationContextT | null>(
  null
);

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

  const { formState,onInputChange, onInputChangeTextArea, onResetForm } = useForm<
    Partial<Publication>
  >({
    imgLink: "",
    description: "",
    date: "",
  });

  const handleNewPublication = async (): Promise<{
    message: string;
    publication: Publication;
  }> => {
    formState["date"] = String(new Date().getTime());

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
        onInputChangeTextArea,
        onInputChange,
        onResetForm,
        handleNewPublication,
      }}
    >
      {children}
    </PublicationContext.Provider>
  );
};
