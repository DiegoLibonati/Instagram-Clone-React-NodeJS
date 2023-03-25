import instagramApi from "../instagramApi";

export const instagramApiNewLike = async (
  idPublication: string,
  context?: string
) => {
  try {
    const form = {
      idPublication,
      context: context ? context : null,
    };

    const request = await instagramApi.post(`/like/new`, form);

    const { data } = request;

    return data;
  } catch (error) {
    return error;
  }
};
