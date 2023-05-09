import "./Input.css";

export default function Input({
  type,
  name,
  value,
  label,
  onChange,
  className,
  ...rest
}) {
  return (
    <>
      <label className={`${className} input--${type}`}>
        <span>{label ? label : name}</span>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          {...rest}
        />
      </label>
    </>
  );
}
