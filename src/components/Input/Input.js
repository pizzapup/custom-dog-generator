import "./Input.css";

export default function Input({
  type,
  name,
  value,
  label,
  onChange,
  className,
}) {
  return (
    <>
      <label className={`${className} input--${type}`} value="pink">
        {label ? label : name}
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
}) => {
  return (
    <>
      <fieldset className="radiogroup">
        <legend>
          {legend ? legend : name} {currVal}
        </legend>
        {values.map((field, index) => (
          <Input
            name={name}
            type="radio"
            key={index}
            value={field.value}
            label={field.value}
            onChange={onChange}
            className={field.value === currVal ? "radiogroup--selected" : ""}
          />
        ))}
      </fieldset>
    </>
  );
};
