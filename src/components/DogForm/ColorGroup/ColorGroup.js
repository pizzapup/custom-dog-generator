import Input from "../../Input/Input";
import {useState} from "react";
import {ColorPaletteIcon} from "../../../assets/icons/ColorPaletteIcon";
import {ntcName} from "../../../helpers/colorHelpers";
import "./ColorGroup.css";

export const ColorGroup = ({
  values,
  name = "missing name",
  legend,
  currVal,
  onChange,
}) => {
  const NTC = ntcName(currVal);
  const [customColor, setcustomColor] = useState("#FFC0CB");
  function Upper(props) {
    return <span className="upper">{props.children}</span>;
  }
  const handleCustomColor = (e) => {
    setcustomColor(e.target.value);
    onChange(e);
  };
  return (
    <div className="radio-step-container">
      <fieldset className="colorgroup ">
        <legend>
          {legend ? legend : name}{" "}
          <div
            style={{
              margin: "10px 0",
              fontSize: "smaller",
            }}
          >
            Closest name for selected color:{" "}
            <span
              style={{
                textDecoration: `underline ${currVal} 2px`,
                outline: `2px dotted ${currVal}`,
                outlineOffset: 2,
              }}
            >
              {NTC}
            </span>
          </div>
        </legend>
        <div className="cg-swatches">
          {values.map((field, index) => (
            <Input
              name={name}
              type="radio"
              key={index}
              value={field.code}
              label={
                <>
                  <div
                    style={{backgroundColor: `${field.code}`}}
                    className="cg-swatch"
                  ></div>
                  <div>
                    {field.value}
                    <br />
                    <Upper> {field.code}</Upper>
                  </div>
                </>
              }
              content={field}
              onChange={onChange}
              className={
                field.code === currVal
                  ? "input--colorgroup input--colorgroup--selected"
                  : "input--colorgroup"
              }
            />
          ))}
          <Input
            name={name}
            label={
              <>
                <div className="colorpicker cg-swatch">
                  <ColorPaletteIcon
                    fill={customColor === currVal ? `${currVal}` : "#ffffff"}
                  />
                </div>
                <div className="colorgroup-label-text">
                  Custom: <br />
                  <Upper>{currVal}</Upper>
                </div>
              </>
            }
            type="color"
            onChange={handleCustomColor}
            className={`${
              customColor === currVal
                ? "input--colorgroup input--colorgroup--selected"
                : "input--colorgroup "
            }`}
          />
        </div>
      </fieldset>
    </div>
  );
};
