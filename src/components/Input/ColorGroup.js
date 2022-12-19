import Input from "./Input";
import { useState } from "react";
import { ColorPaletteIcon } from "../../assets/icons/ColorPaletteIcon";

export const ColorGroup = ({
  values,
  name = "missing name",
  legend,
  currVal,
  onChange,
}) => {
  const [customColor, setcustomColor] = useState("pink");
  const handleCustomColor = (e) => {
    setcustomColor(e.target.value);
    onChange(e);
  };

  return (
    <>
      <fieldset className="colorgroup">
        <legend>{legend ? legend : name}</legend>
        {values.map((field, index) => (
          <Input
            name={name}
            type="radio"
            key={index}
            value={field.code}
            label={
              <>
                <div
                  style={{ backgroundColor: field.code }}
                  className="colorgroup-color"
                ></div>
                <div className="colorgroup-label-text">
                  {field.value}
                  <br />
                  {field.code}
                </div>
              </>
            }
            content={field}
            onChange={onChange}
            className={field.code === currVal ? "colorgroup--selected" : ""}
          />
        ))}
        <Input
          name={name}
          label={
            <>
              <div className="colorgroup-colorpicker">
                <ColorPaletteIcon
                  fill={customColor === currVal ? currVal : "#ffffff"}
                />
              </div>
              <div className="colorgroup-label-text">
                Custom Color: <br />
                {currVal}
              </div>
            </>
          }
          type="color"
          onChange={handleCustomColor}
          className={`${customColor === currVal ? "colorgroup--selected" : ""}`}
        />
      </fieldset>
    </>
  );
};
