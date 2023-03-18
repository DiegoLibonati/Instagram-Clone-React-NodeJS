export const SuggetionProfile = () => {
  return (
    <li className="flex items-center justify-between  w-full h-auto my-2 py-1">
      <div className="flex items-center justify-start w-auto h-auto">
        <img
          className="w-8 h-8 object-cover rounded-full"
          src="https://pfpmaker.com/_nuxt/img/profile-3-1.3e702c5.png"
          alt="perfil"
        ></img>
        <h2 className="text-black font-medium text-sm ml-2">
          suggestion profile
        </h2>
      </div>
      <button className="text-blue-500 text-sm cursor-pointer">Seguir</button>
    </li>
  );
};
