import instagramApi from "../instagramApi";

export const instagramApiSetRecentUserSearch = async (username: string) => {
  try {
    const request = await instagramApi.get(`/user/recentsearch/${username}`);

    const { data } = request;

    return data;
  } catch (error) {
    return error;
  }
};
