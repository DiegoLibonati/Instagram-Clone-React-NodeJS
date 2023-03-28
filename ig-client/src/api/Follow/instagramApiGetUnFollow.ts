import instagramApi from "../instagramApi";

export const instagramApiGetUnFollow = async (idProfile: string) => {
  try {
    const request = await instagramApi.get(`/follow/unfollow/${idProfile}`);

    const { data } = request;

    return data;
  } catch (error) {
    return error;
  }
};
