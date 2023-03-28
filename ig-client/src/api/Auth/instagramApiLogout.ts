import instagramApi from "../instagramApi";

export const instagramApiLogout = () => {
  try {
    instagramApi.get("/auth/logout");
  } catch (error) {
    return error;
  }
};
