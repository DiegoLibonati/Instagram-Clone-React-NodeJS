import { useMediaMatch } from "../../hooks/useMediaMatch";
import { CommentsMobile } from "../components/feed/comments/commentsmobile/CommentsMobile";
import { Publications } from "../components/feed/publications/Publications";
import { PublicationsHeader } from "../components/feed/publications/PublicationsHeader";
import { useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export const PublicationsPage = () => {
  const { matchMediaQuery } = useMediaMatch(1024);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { pathname } = useLocation();

  useEffect(() => {
    if (matchMediaQuery && pathname.startsWith("/p/")) {
      return navigate(`/${user.username}`);
    }
  }, [matchMediaQuery, navigate, pathname, user.username]);

  return (
    <>
      <PublicationsHeader></PublicationsHeader>
      <Publications></Publications>

      {!matchMediaQuery && <CommentsMobile></CommentsMobile>}
    </>
  );
};
