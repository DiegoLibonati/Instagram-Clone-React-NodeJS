import { SearchListItem } from "./SearchListItem";

export const SearchList = ({
  outTitle,
  inTitle,
  title,
  className,
}: {
  outTitle?: boolean;
  inTitle?: boolean;
  title: string;
  className: string;
}) => {
  return (
    <>
      {outTitle && <h2 className="font-medium mt-2">{title}</h2>}
      <ul className={className}>
        {inTitle && <h2 className="font-medium mb-2">{title}</h2>}
        <SearchListItem></SearchListItem>
      </ul>
    </>
  );
};
