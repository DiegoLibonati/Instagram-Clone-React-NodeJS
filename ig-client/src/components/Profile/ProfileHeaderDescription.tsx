import { useProfileUser } from "../../hooks/useProfileUser";

export const ProfileHeaderDescription = (): JSX.Element => {
  const { user } = useProfileUser();

  return (
    <article className="flex items-start justify-start flex-col w-full h-auto mt-2">
      <h2 className="text-sm font-bold md:text-lg">{user?.name}</h2>
      <p className="text-sm md:text-lg">{user.description}</p>
    </article>
  );
};
