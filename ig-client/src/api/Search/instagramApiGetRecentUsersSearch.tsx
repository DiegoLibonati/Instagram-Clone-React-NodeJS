import instagramApi from "../instagramApi";

export const instagramApiGetRecentUsersSearch = async () => {
  try {
    const request = await instagramApi.get(`/search/get`);

    const { data } = request;

    return data;
  } catch (error) {
    return error;
  }
};
