import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CommentsMobile } from "../../../components/Comments/Mobile/CommentsMobile";
import { Publications } from "../../../components/Publications/Publications";
import { PublicationsHeader } from "../../../components/Publications/PublicationsHeader";
import { useMediaMatch } from "../../../hooks/useMediaMatch";
import { useProfileUser } from "../../../hooks/useProfileUser";

export const PublicationsPage = () => {
  const { matchMediaQuery } = useMediaMatch(1024);
  const navigate = useNavigate();
  const { user } = useProfileUser();
  const { pathname } = useLocation();

  useEffect(() => {
    if (matchMediaQuery && pathname.startsWith("/p/")) {
      return navigate(`/${user.username}`);
    }
  }, [matchMediaQuery, navigate, pathname, user.username]);

  return (
    <>
      <PublicationsHeader></PublicationsHeader>

      <Publications publications={user.publications}></Publications>

      {!matchMediaQuery && <CommentsMobile></CommentsMobile>}
    </>
  );
};
