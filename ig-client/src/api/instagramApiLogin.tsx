import instagramApi from "./instagramApi";

const headers = {
  "Content-Type": "application/json;charset=UTF-8",
  "Access-Control-Allow-Origin": "*",
  credentials: "same-origin",
};

export const instagramApiLogin = async (form: Record<string, string>) => {
  try {
    const request = await instagramApi.post("/auth/login", form, {
      headers: headers,
    });

    const { data } = request;

    return data;
  } catch (error) {
    return error;
  }
};
