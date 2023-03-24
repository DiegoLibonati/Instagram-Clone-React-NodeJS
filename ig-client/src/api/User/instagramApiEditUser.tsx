import { UserEdit } from "../../types/types";
import instagramApi from "../instagramApi";

export const instagramApiEditUser = async (form: UserEdit) => {
  try {
    const request = await instagramApi.put(`/user`, form, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    const { data } = request;

    return data;
  } catch (error) {
    return error;
  }
};
