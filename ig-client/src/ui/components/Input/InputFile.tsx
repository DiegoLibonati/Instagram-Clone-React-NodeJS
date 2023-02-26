import { useContext } from "react";
import { UIContext } from "../../../contexts/UIContext";

export const InputFile = ({
  label,
  classNameLabel,
}: {
  label: string;
  classNameLabel: string;
}) => {
  const { setPreviewSrc } = useContext(UIContext);

  return (
    <>
      <label htmlFor="input-file" className={classNameLabel}>
        {label}
      </label>
      <input
        type="file"
        id="input-file"
        hidden
        onChange={(e) =>
          setPreviewSrc(URL.createObjectURL(e.target!.files![0]))
        }
      ></input>
    </>
  );
};
