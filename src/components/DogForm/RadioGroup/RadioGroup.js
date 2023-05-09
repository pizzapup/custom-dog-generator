import Input from "../../Input/Input";
import "./RadioGroup.css";
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
                ? `rg-input radiogroup--selected ${className}`
                : `rg-input ${className}`
            }
          />
        ))}
      </fieldset>
    </>
  );
};
