import instagramApi from "../instagramApi";

export const instagramApiRegister = async (form: Record<string, string>) => {
  try {
    const request = await instagramApi.post("/auth/register", form);

    const { data } = request;

    return data;
  } catch (error) {
    return error;
  }
};
