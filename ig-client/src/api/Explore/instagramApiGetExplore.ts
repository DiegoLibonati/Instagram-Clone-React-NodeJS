import instagramApi from "../instagramApi";

export const instagramApiGetExplore = async () => {
  try {
    const request = await instagramApi.get(`/explore`);

    const { data } = request;

    return data;
  } catch (error) {
    return error;
  }
};
