export const InputText = ({
  id,
  placeholder,
  classNameLabel,
  classNameInput,
  value,
  name,
  label,
  onChange,
}: {
  id: string;
  placeholder: string;
  classNameLabel: string;
  classNameInput: string;
  value: string;
  name: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <>
      <label htmlFor={id} className={classNameLabel}>
        {label}
      </label>
      <input
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
