import instagramApi from "../instagramApi";

export const instagramApiGetFeed = async () => {
  try {
    const request = await instagramApi.get(`/publication`);

    const { data } = request;

    return data;
  } catch (error) {
    return error;
  }
};
