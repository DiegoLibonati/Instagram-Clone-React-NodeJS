export const InputText = ({
  id,
  placeholder,
  classNameLabel,
  classNameInput,
  value,
  name,
  label,
}: {
  id: string;
  placeholder: string;
  classNameLabel: string;
  classNameInput: string;
  value: string;
  name: string;
  label: string;
}) => {
  return (
    <>
      <label htmlFor={id} className={classNameLabel}>
        {label}
      </label>
      <input
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
