import instagramApi from "./instagramApi";

export const instagramApiLogout = () => {
  instagramApi.get("/auth/logout");
};
