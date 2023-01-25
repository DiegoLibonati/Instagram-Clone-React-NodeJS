import { PublicationActions } from "./PublicationActions";
import { PublicationForm } from "./PublicationForm";
import { PublicationHeader } from "./PublicationHeader";
import { PublicationInformation } from "./PublicationInformation";

export const Publication = () => {
  return (
    <article className="flex items-start justify-center flex-col w-full h-auto">
      <PublicationHeader></PublicationHeader>
      <img
        src="https://cdn.pixabay.com/photo/2021/04/13/23/25/paisaje-6176882_1280.jpg"
        alt="paisaje"
        className="w-full h-auto object-cover"
      ></img>
      <PublicationActions></PublicationActions>
      <PublicationInformation></PublicationInformation>
      <PublicationForm></PublicationForm>
      <h5 className="text-gray-400 text-sm w-100 p-2">Hace 22 horas</h5>
    </article>
  );
};
