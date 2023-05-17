export const RadioStep = ({
  fieldData,
  currValue,
  handleInputChange,
  children,
  name,
}) => {
  return (
    <>
      <fieldset className="fieldset fieldset--radio-btns">
        <legend>{children}</legend>
        {fieldData.types.map((field, i) => (
          <label
            key={`${field}-${i}`}
            className={
              field === currValue
                ? "radio-btn radio-btn--selected"
                : "radio-btn"
            }
          >
            <input
              type="radio"
              name={name}
              value={field}
              onChange={handleInputChange}
            />
            {field}
          </label>
        ))}
      </fieldset>
    </>
  );
};
