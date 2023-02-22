import instagramApi from "./instagramApi";

export const instagramApiRenew = async () => {
  try {
    const request = await instagramApi.get("/auth/renew");

    const { data } = request;

    return data;
  } catch (error) {
    return error;
  }
};
