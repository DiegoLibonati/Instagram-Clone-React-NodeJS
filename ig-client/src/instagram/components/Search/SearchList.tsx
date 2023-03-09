import { SearchListItem } from "./SearchListItem";

export const SearchList = ({
  outTitle,
  inTitle,
  title,
  className,
  users,
}: {
  outTitle?: boolean;
  inTitle?: boolean;
  title: string;
  className: string;
  users: {
    username: string;
    avatar: string;
  }[];
}) => {
  return (
    <>
      {outTitle && <h2 className="font-medium mt-2">{title}</h2>}
      <ul className={className}>
        {inTitle && <h2 className="font-medium mb-2">{title}</h2>}

        {users.length === 0 && (
          <div className="flex items-center justify-center w-full h-full">
            <h2>No se encontraron resultados</h2>
          </div>
        )}

        {users.length > 0 &&
          users.map((user) => {
            return (
              <SearchListItem
                username={user.username}
                avatar={user.avatar}
              ></SearchListItem>
            );
          })}
      </ul>
    </>
  );
};
