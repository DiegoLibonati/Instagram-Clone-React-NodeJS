import { instagramApiGetRecentUsersSearch } from "../api/Search/instagramApiGetRecentUsersSearch";
import { instagramApiGetUsers } from "../api/User/instagramApiGetUsers";
import { useEffect, useContext } from "react";
import { SearchContext } from "../contexts/Search/SearchContext";
import { AuthContext } from "../contexts/Auth/AuthContext";

export const useSearchWithAuth = (): void => {
  const searchContextStore = useContext(SearchContext);

  const authContextStore = useContext(AuthContext);

  const getUsers = async (): Promise<void> => {
    const request = await instagramApiGetUsers(
      searchContextStore?.formState.query!
    );

    const { users } = request;
    searchContextStore?.setFilterUsers(users);
  };

  const getRecentUsers = async (): Promise<void> => {
    const request = await instagramApiGetRecentUsersSearch();

    const recentUsers = request.payload;

    authContextStore?.onLogin({
      ...authContextStore?.user,
      recentUsers: recentUsers,
    });
  };

  useEffect(() => {
    if (searchContextStore?.formState.query) {
      getUsers();
    } else {
      searchContextStore?.setFilterUsers([]);
    }
    // eslint-disable-next-line
  }, [searchContextStore?.formState.query]);

  useEffect(() => {
    if (
      !searchContextStore?.filterUsers?.length &&
      !searchContextStore?.formState.query &&
      authContextStore?.user?.recentUsers?.length! > 0
    ) {
      getRecentUsers();
    }
  }, [
    searchContextStore?.filterUsers,
    searchContextStore?.formState.query,
    authContextStore?.user.recentUsers?.length!,
  ]);
};
