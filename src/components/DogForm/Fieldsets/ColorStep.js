import {useState} from "react";

export const ColorStep = ({
  values,
  fieldData,
  handleColorInputChange,
  children,
  name,
}) => {
  const sendColorToCSS = (color) => ({
    "--swatch-color": color,
  });
  const [hasChanged, setHasChanged] = useState(false);
  return (
    <fieldset className="fieldset--color-swatches">
      <legend>{children}</legend>
      {fieldData.colors.map((field, i) => (
        <label
          key={`${field.name}-${i}`}
          style={sendColorToCSS(field.hex)}
          className={
            field.hex === values.eyeColor
              ? "swatch-btn swatch-btn--selected"
              : "swatch-btn"
          }
        >
          <input
            type="radio"
            name="eyeColor"
            value={field.hex}
            onChange={handleColorInputChange}
          />
          <span className="sr-only">
            {field.name}: {field.hex}
          </span>
        </label>
      ))}
      <label
        style={
          hasChanged
            ? sendColorToCSS(values.eyeColor)
            : sendColorToCSS("linear-gradient(#e66465, #9198e5)")
        }
        onClick={() => setHasChanged(true)}
        className="swatch-btn"
      >
        <input
          type="color"
          name={name}
          value={values.eyeColor}
          onChange={handleColorInputChange}
        />
        <span className="sr-only">Custom color: {values.eyeColor}</span>
      </label>
    </fieldset>
  );
};
