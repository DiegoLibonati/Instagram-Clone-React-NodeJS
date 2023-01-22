import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {
  return (
    <AuthLayout text="¿No tienes una cuenta?" textLink="Registrate">
      <form className="flex items-center justify-center flex-col w-full h-full my-2">
        <input
          className="w-full p-2 text-sm text-black border-gray-300 border my-2 outline-none"
          placeholder="Telefono, usuario o correo electronico"
        ></input>
        <input
          className="w-full p-2 text-sm text-black border-gray-300 border my-2 outline-none"
          placeholder="Contraseña"
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
