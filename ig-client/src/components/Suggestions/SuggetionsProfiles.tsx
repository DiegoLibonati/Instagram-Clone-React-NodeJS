import { useEffect, useState } from "react";
import { isUserFollow } from "../../helpers/isUserFollow";
import { useProfileUser } from "../../hooks/useProfileUser";
import { User } from "../../types/types";
import { SuggetionProfile } from "./SuggetionProfile";
import { SuggetionsProfilesHeader } from "./SuggetionsProfilesHeader";
import { instagramCheck } from "../../assets/Global/images";

export const SuggetionsProfiles = ({
  suggestions,
}: {
  suggestions: User[];
}): JSX.Element => {
  const [hasChildrens, setHasChildrens] = useState<boolean>(false);
  const { user } = useProfileUser();

  useEffect(() => {
    const isAnyUserWithoutFollow = suggestions?.some(
      (suggestion) => isUserFollow(user, suggestion._id!, "following") !== true
    );

    if (isAnyUserWithoutFollow) return setHasChildrens(true);
    return setHasChildrens(false);
  }, [suggestions, user]);

  return (
    <article className="flex items-center justify-start flex-col w-full h-auto">
      <SuggetionsProfilesHeader></SuggetionsProfilesHeader>

      <ul className="flex items-center justisfy-start flex-col w-full h-auto">
        {!hasChildrens ? (
          <div className="flex flex-col items-center justify-center w-full h-auto p-2 mb-2">
            <img
              src={instagramCheck}
              alt="instagram-check"
              className="h-12 w-12 mb-2"
            ></img>
            <h2 className="text-sm text-center">
              ¡Hey, no hay mas sugerencias para ti!
            </h2>
          </div>
        ) : (
          suggestions?.map((suggestion: User) => {
            if (!isUserFollow(user, suggestion._id!, "following")) {
              return (
                <SuggetionProfile
                  key={suggestion._id}
                  suggestion={suggestion}
                ></SuggetionProfile>
              );
            }
            return "";
          })
        )}
      </ul>
    </article>
  );
};
