import instagramApi from "../instagramApi";

export const instagramApiGetFollow = async (idProfile: string) => {
  try {
    const request = await instagramApi.get(`/follow/follow/${idProfile}`);

    const { data } = request;

    return data;
  } catch (error) {
    return error;
  }
};
