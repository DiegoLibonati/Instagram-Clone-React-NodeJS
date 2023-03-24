import { Publication } from "../../types/types";
import instagramApi from "../instagramApi";

export const instagramApiCreatePublication = async (form: Publication) => {
  try {
    const request = await instagramApi.post(`/publication/new`, form, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    const { data } = request;

    return data;
  } catch (error) {
    return error;
  }
};
