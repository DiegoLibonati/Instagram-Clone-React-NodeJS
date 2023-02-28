import { useContext } from "react";
import { instagramApiLogin } from "../../api/instagramApiLogin";
import { AuthContext } from "../../contexts/AuthContext";
import { UIContext } from "../../contexts/UIContext";
import { useForm } from "../../hooks/useForm";
import { AuthLayout } from "../layout/AuthLayout";

const form = {
  email: "",
  password: "",
};

export const LoginPage = () => {
  const { formState, onInputChange, onResetForm } = useForm(form);
  const { setAlertOpen } = useContext(UIContext);
  const { onChecking, onLogout, onLogin } = useContext(AuthContext);

  const onSubmitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onChecking();
    const request = await instagramApiLogin(formState);

    if (request.hasOwnProperty("response")) {
      onLogout();
      return setAlertOpen(
        "error",
        "¡Oh, algo salio mal!",
        request.response.data.message,
        "bg-red-600"
      );
    }

    const userData = request.payload;

    onResetForm();
    onLogin(userData);
  };

  return (
    <AuthLayout text="¿No tienes una cuenta?" textLink="Registrate">
      <form
        className="flex items-center justify-center flex-col w-full h-full my-2"
        onSubmit={(e) => onSubmitLogin(e)}
      >
        <input
          className="w-full p-2 text-sm text-black border-gray-300 border my-2 outline-none"
          placeholder="Correo electronico"
          name="email"
          value={formState.email}
          onChange={onInputChange}
        ></input>
        <input
          className="w-full p-2 text-sm text-black border-gray-300 border my-2 outline-none"
          placeholder="Contraseña"
          name="password"
          value={formState.password}
          onChange={onInputChange}
        ></input>
        <button className="my-2 w-full bg-blue-500 text-center rounded-md text-white font-medium tracking-wide py-1">
          Iniciar sesion
        </button>
        <hr className="w-full h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
        <button className="my-2 w-full bg-blue-500 text-center rounded-md text-white font-medium tracking-wide py-1">
          Iniciar sesion con Facebook
        </button>
        <a href="/" className="text-indigo-600 my-2 text-sm">
          ¿Olvidaste tu contraseña?
        </a>
      </form>
    </AuthLayout>
  );
};
