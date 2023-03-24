import { instagramApiGetRecentUsersSearch } from "../api/Search/instagramApiGetRecentUsersSearch";
import { instagramApiGetUsers } from "../api/User/instagramApiGetUsers";
import { useEffect, useContext } from "react";
import { SearchContext } from "../contexts/Search/SearchContext";
import { AuthContext } from "../contexts/Auth/AuthContext";

export const useSearchWithAuth = () => {
  const { filterUsers, formState, setFilterUsers } = useContext(SearchContext);

  const { user, onLogin } = useContext(AuthContext);

  const getUsers = async () => {
    const request = await instagramApiGetUsers(formState.query);

    const { users } = request;
    setFilterUsers(users);
  };

  const getRecentUsers = async () => {
    const request = await instagramApiGetRecentUsersSearch();

    const recentUsers = request.payload;

    onLogin({ ...user, recentUsers: recentUsers });
  };

  useEffect(() => {
    if (formState.query) {
      getUsers();
    } else {
      setFilterUsers([]);
    }
    // eslint-disable-next-line
  }, [formState.query]);

  useEffect(() => {
    if (
      !filterUsers?.length &&
      !formState.query &&
      user?.recentUsers?.length > 0
    ) {
      getRecentUsers();
    }
  }, [filterUsers, formState.query, user.recentUsers.length]);
};
