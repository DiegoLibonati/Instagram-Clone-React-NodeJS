import instagramApi from "../instagramApi";

export const instagramApiSetRecentUserSearch = async (username: string) => {
  try {
    const request = await instagramApi.get(`/search/set/${username}`);

    const { data } = request;

    return data;
  } catch (error) {
    return error;
  }
};
