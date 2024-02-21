import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { SearchContext } from "../../contexts/Search/SearchContext";
import { SearchListItem } from "./SearchListItem";
import { RecentSearch } from "../../types/types";

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
}): JSX.Element => {
  const searchContextStore = useContext(SearchContext);
  const authContextStore = useContext(AuthContext);

  return (
    <>
      {outTitle && !searchContextStore?.formState.query && (
        <h2 className="font-medium mt-2">{title}</h2>
      )}
      <ul className={className}>
        {inTitle && !searchContextStore?.formState.query && (
          <h2 className="font-medium mb-2">{title}</h2>
        )}

        {authContextStore?.user.recentUsers?.length! > 0 &&
          !searchContextStore?.formState.query &&
          [...authContextStore?.user.recentUsers!]
            .reverse()
            .map((recentUser: RecentSearch) => {
              return (
                <SearchListItem
                  key={recentUser.id}
                  username={recentUser.username}
                  avatar={recentUser.avatar}
                ></SearchListItem>
              );
            })}

        {users?.length === 0 && searchContextStore?.formState.query && (
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
