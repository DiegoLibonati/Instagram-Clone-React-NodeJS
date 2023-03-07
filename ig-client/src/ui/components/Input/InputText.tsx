import { LegacyRef } from "react";

export const InputText = ({
  id,
  placeholder,
  classNameLabel,
  classNameInput,
  value,
  name,
  label,
  onFocus,
  onChange,
}: {
  id: string;
  placeholder: string;
  classNameLabel?: string;
  classNameInput: string;
  value: string;
  name: string;
  label?: string;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <>
      {label && (
        <label htmlFor={id} className={classNameLabel}>
          {label}
        </label>
      )}
      <input
        onFocus={onFocus}
        onChange={onChange}
        type="text"
        placeholder={placeholder}
        id={id}
        className={classNameInput}
        value={value}
        name={name}
      ></input>
    </>
  );
};
