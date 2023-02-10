import { useMediaMatch } from "../../hooks/useMediaMatch";
import { CommentsMobile } from "../components/feed/comments/commentsmobile/CommentsMobile";
import { Publications } from "../components/feed/publications/Publications";
import { PublicationsHeader } from "../components/feed/publications/PublicationsHeader";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const PublicationsPage = () => {
  const { matchMediaQuery } = useMediaMatch(1024);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (matchMediaQuery && pathname === "/die_libonati/123123142") {
      return navigate("/die_libonati");
    }
  }, [matchMediaQuery, navigate, pathname]);

  return (
    <>
      <PublicationsHeader></PublicationsHeader>
      <Publications></Publications>

      {!matchMediaQuery && <CommentsMobile></CommentsMobile>}
    </>
  );
};
