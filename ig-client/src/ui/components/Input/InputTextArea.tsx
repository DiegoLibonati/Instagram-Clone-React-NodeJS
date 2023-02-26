export const InputTextArea = ({
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
      <textarea
        placeholder={placeholder}
        className={classNameInput}
        value={value}
        name={name}
      ></textarea>
    </>
  );
};
