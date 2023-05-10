import {useState} from "react";
import {writeData} from "../../firebase/dbHelpers";
import {fields} from "./data";
import {ntcName} from "../../helpers/colorHelpers";
import DogPreview from "./DogPreview/DogPreview";

const uids = "default-user";

export default function DogForm({initialValues}) {
  const [values, setValues] = useState(initialValues);
  const [hasChanged, setHasChanged] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    writeData(values, ["posts", `user-posts/${uids}`]);
    setValues(initialValues);
  };

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setValues({...values, [name]: value});
  };
  const handleColorInputChange = (e) => {
    const {name, value} = e.target;
    setValues({...values, [name]: value});
    const colorName = ntcName(value);
    const colorNamename =
      name === "bodyColor" ? "bodyColorName" : "eyeColorName";
    setValues({...values, [colorNamename]: colorName});
  };
  const sendColorToCSS = (color) => ({
    "--swatch-color": color,
  });
  return (
    <div className="dog-form-component">
      <div className="dog-form-preview">
        <DogPreview values={values} />
        {values.bodyColor} | {values.bodyColorName && values.bodyColorName}
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleInputChange}
          />
        </label>

        <fieldset>
          <legend>Body</legend>
          {fields.body.types.map((field, i) => (
            <label key={`${field}-${i}`}>
              <input
                type="radio"
                name="body"
                value={field}
                onChange={handleInputChange}
              />
              {field}
            </label>
          ))}
        </fieldset>
        <fieldset className="fieldset-color-swatches">
          <legend>Body Color</legend>
          {fields.body.colors.map((field, i) => (
            <label key={`${field.name}-${i}`} style={sendColorToCSS(field.hex)}>
              <input
                type="radio"
                name="bodyColor"
                value={field.hex}
                onChange={handleColorInputChange}
              />
              <div className="swatch"></div>
              {/* <div className="swatch-name">
                <span>{field.name}</span>
                <span className="hex">{field.hex}</span>
              </div> */}
            </label>
          ))}
          <label
            style={
              hasChanged
                ? sendColorToCSS(values.bodyColor)
                : sendColorToCSS("linear-gradient(#e66465, #9198e5)")
            }
            onClick={() => setHasChanged(true)}
          >
            <input
              type="color"
              name="bodyColor"
              value={values.bodyColor}
              onChange={handleColorInputChange}
            />
            <div className="swatch"></div>
            {/* <div className="swatch-name">
              <span>{hasChanged ? values.bodyColorName : "Custom"}</span>
              <span className="hex">{values.bodyColor}</span>
            </div> */}
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
