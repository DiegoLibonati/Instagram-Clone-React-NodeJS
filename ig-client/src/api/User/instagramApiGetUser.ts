import instagramApi from "../instagramApi";

export const instagramApiGetUser = async (username: string) => {
  try {
    const request = await instagramApi.get(`/user/${username}`);

    const { data } = request;

    return data;
  } catch (error) {
    return error;
  }
};
