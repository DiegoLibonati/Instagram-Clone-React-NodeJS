import instagramApi from "../instagramApi";

export const instagramApiLogin = async (form: Record<string, string>) => {
  try {
    const request = await instagramApi.post("/auth/login", form);

    const { data } = request;

    return data;
  } catch (error) {
    return error;
  }
};
