import { useContext } from "react";
import { UIContext } from "../../../contexts/Ui/UIContext";

export const InputFile = ({
  label,
  classNameLabel,
  name,
  onChange,
}: {
  label: string;
  classNameLabel: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}): JSX.Element => {
  const uiContextStore = useContext(UIContext)!;

  return (
    <>
      <label htmlFor="input-file" className={classNameLabel}>
        {label}
      </label>
      <input
        type="file"
        id="input-file"
        name={name}
        hidden
        onChange={(e) => {
          onChange!(e);
          uiContextStore?.setPreviewSrc(URL.createObjectURL(e.target!.files![0]));
        }}
      ></input>
    </>
  );
};
