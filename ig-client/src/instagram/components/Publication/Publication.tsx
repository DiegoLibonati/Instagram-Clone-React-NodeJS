import { PublicationActions } from "./PublicationActions";
import { PublicationForm } from "./PublicationForm";
import { PublicationHeader } from "./PublicationHeader";
import { PublicationInformation } from "./PublicationInformation";

export const Publication = () => {
  return (
    <article className="flex items-start justify-center flex-col w-full h-auto mb-5">
      <PublicationHeader></PublicationHeader>
      <img
        src="https://www.imagineforest.com/blog/wp-content/uploads/2021/12/asian-woman-5450041_640.jpg"
        alt="paisaje"
        className="w-full h-auto max-h-[600px] object-cover"
      ></img>
      <PublicationActions></PublicationActions>
      <PublicationInformation></PublicationInformation>
      <PublicationForm></PublicationForm>
      <h5 className="text-gray-500 text-sm w-100 p-2 my-[2px]">
        Hace 22 horas
      </h5>
    </article>
  );
};
