import instagramApi from "../instagramApi";

export const instagramApiLikePublication = async (
  idUser: string,
  idPublication: string
) => {
  try {
    const form = {
      idUser,
      idPublication,
    };

    const request = await instagramApi.post(
      `/publication/like/publication`,
      form
    );

    const { data } = request;

    return data;
  } catch (error) {
    return error;
  }
};
