import instagramApi from "./instagramApi";

export const instagramApiGetFollow = async (username: string) => {
  try {
    const request = await instagramApi.get(`/user/follow/${username}`);

    const { data } = request;

    return data;
  } catch (error) {
    return error;
  }
};
