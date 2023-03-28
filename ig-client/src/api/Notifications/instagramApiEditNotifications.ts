import instagramApi from "../instagramApi";

export const instagramApiEditNotifications = async () => {
  try {
    const request = await instagramApi.put(`/notification`);

    const { data } = request;

    return data;
  } catch (error) {
    return error;
  }
};
