import instagramApi from "../instagramApi";

export const instagramApiGetUsers = async (username: string) => {
  try {
    const request = await instagramApi.get(`/user/users/${username}`);

    const { data } = request;

    return data;
  } catch (error) {
    return error;
  }
};
