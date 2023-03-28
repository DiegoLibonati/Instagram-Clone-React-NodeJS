import instagramApi from "../instagramApi";

export const instagramApiRemoveLike = async (
  idPublication: string,
  context?: string
) => {
  try {
    const request = await instagramApi.delete(
      `/like/remove/${idPublication}/${context}`
    );

    const { data } = request;

    return data;
  } catch (error) {
    return error;
  }
};
