import instagramApi from "../instagramApi";

export const instagramApiGetUnFollow = async (username: string) => {
  try {
    const request = await instagramApi.get(`/user/unfollow/${username}`);

    const { data } = request;

    return data;
  } catch (error) {
    return error;
  }
};
