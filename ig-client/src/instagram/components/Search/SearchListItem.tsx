import { UserImage } from "../UserImage/UserImage";

export const SearchListItem = () => {
  return (
    <li className="flex flex-row items-center justify-start w-full h-14">
      <UserImage
        className="rounded-full w-12 h-12"
        avatar=""
        name=""
      ></UserImage>
      <h3 className="ml-2 font-medium">die_libonati</h3>
    </li>
  );
};
