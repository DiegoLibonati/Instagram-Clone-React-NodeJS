import { Link } from "react-router-dom";

export const SuggetionsProfilesHeader = (): JSX.Element => {
  return (
    <div className="flex items-center justify-between flex-row w-full h-auto my-2">
      <h4 className="text-gray-500 font-medium">Sugerencias para ti</h4>
      <Link to="/" className="text-black">
        Ver todo
      </Link>
    </div>
  );
};
