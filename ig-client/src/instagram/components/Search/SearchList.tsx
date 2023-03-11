import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { SearchContext } from "../../../contexts/SearchContext";
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
  const { formState } = useContext(SearchContext);
  const { user } = useContext(AuthContext);

  return (
    <>
      {outTitle && !formState.query && (
        <h2 className="font-medium mt-2">{title}</h2>
      )}
      <ul className={className}>
        {inTitle && !formState.query && (
          <h2 className="font-medium mb-2">{title}</h2>
        )}

        {user.recentUsers.length > 0 &&
          !formState.query &&
          [...user.recentUsers]
            .reverse()
            .map(
              (recentUser: {
                avatar: string;
                username: string;
                name: string;
              }) => {
                return (
                  <SearchListItem
                    username={recentUser.username}
                    avatar={recentUser.avatar}
                  ></SearchListItem>
                );
              }
            )}

        {users?.length === 0 && formState.query && (
          <div className="flex items-center justify-center w-full h-full">
            <h2>No se encontraron resultados</h2>
          </div>
        )}

        {users?.length > 0 &&
          users?.map((user) => {
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
