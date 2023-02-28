export const InputTextArea = ({
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
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) => {
  return (
    <>
      <label htmlFor={id} className={classNameLabel}>
        {label}
      </label>
      <textarea
        onChange={onChange}
        placeholder={placeholder}
        className={classNameInput}
        value={value}
        name={name}
      ></textarea>
    </>
  );
};
