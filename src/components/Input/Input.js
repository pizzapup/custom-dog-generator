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
      <label className={`${className} input--${type}`} value="pink" {...rest}>
        <span>{label ? label : name}</span>
        <input
          className={className}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
      </label>
    </>
  );
}

export const RadioGroup = ({
  values,
  name = "missing name",
  legend,
  currVal,
  onChange,
  className,
}) => {
  return (
    <>
      <fieldset className="radiogroup">
        <legend>{legend ? legend : name}</legend>
        {values.map((field, index) => (
          <Input
            name={name}
            type="radio"
            key={index}
            value={field.value}
            label={field.value}
            onChange={onChange}
            className={
              field.value === currVal
                ? `radiogroup--selected ${className}`
                : className
            }
          />
        ))}
      </fieldset>
    </>
  );
};
