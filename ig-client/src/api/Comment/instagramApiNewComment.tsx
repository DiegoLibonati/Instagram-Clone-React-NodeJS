import instagramApi from "../instagramApi";

export const instagramApiNewComment = async (
  idPublication: string,
  comment: string,
  context?: string
) => {
  try {
    const form = {
      idPublication,
      context: context ? context : null,
      comment,
    };

    const request = await instagramApi.post(`/comment/new`, form);

    const { data } = request;

    return data;
  } catch (error) {
    return error;
  }
};
