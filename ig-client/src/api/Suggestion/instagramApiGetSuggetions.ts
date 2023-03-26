import instagramApi from "../instagramApi";

export const instagramApiGetSuggetions = async () => {
  try {
    const request = await instagramApi.get(`/suggestion/users`);

    const { data } = request;

    return data;
  } catch (error) {
    return error;
  }
};
