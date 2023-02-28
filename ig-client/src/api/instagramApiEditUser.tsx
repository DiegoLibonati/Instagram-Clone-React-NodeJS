import instagramApi from "./instagramApi";

export const instagramApiEditUser = async (username: string, form: any) => {
  try {
    const request = await instagramApi.put(`/user/${username}`, form, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    const { data } = request;

    return data;
  } catch (error) {
    return error;
  }
};
