import {ColorStep, RadioStep} from "../Fieldsets";
import {fields} from "../data";

export const StepContent = ({
  values,
  handleInputChange,
  handleColorInputChange,
}) => {
  return {
    1: (
      <div className="dog-form-info-fieldset">
        <label className="input-label--name input-label--basictext">
          <span>Name</span>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleInputChange}
          />
        </label>
        <label className="input-label--basictext">
          <span> Favorite Toy</span>
          <input
            type="text"
            name="favtoy"
            value={values.favtoy}
            onChange={handleInputChange}
          />
        </label>
        <label className="input-label--basictext">
          <span>About</span>
          <textarea
            name="about"
            value={values.about}
            onChange={handleInputChange}
          ></textarea>
        </label>
      </div>
    ),
    2: (
      <>
        <RadioStep
          name="body"
          fieldData={fields.body}
          currValue={values.body}
          handleInputChange={handleInputChange}
        >
          <b>Body Type:</b> {values.body}
        </RadioStep>
        <ColorStep
          name="bodyColor"
          fieldData={fields.body}
          values={values}
          handleColorInputChange={handleColorInputChange}
        >
          <b>Body Color:</b> {values.bodyColorName} ({values.bodyColor})
        </ColorStep>
      </>
    ),
    3: (
      <>
        <RadioStep
          name="eyes"
          fieldData={fields.eyes}
          currValue={values.eyes}
          handleInputChange={handleInputChange}
        >
          <b>Eye Type:</b> {values.eyes}
        </RadioStep>
        <ColorStep
          name="eyeColor"
          fieldData={fields.eyes}
          values={values}
          handleColorInputChange={handleColorInputChange}
        >
          <b>Eye Color:</b> {values.eyeColorName} ({values.eyeColor})
        </ColorStep>
      </>
    ),
    4: (
      <>
        <RadioStep
          name="nose"
          fieldData={fields.nose}
          currValue={values.nose}
          handleInputChange={handleInputChange}
        >
          <b>Nose Type:</b> {values.nose}
        </RadioStep>
        <RadioStep
          name="mouth"
          fieldData={fields.mouth}
          currValue={values.mouth}
          handleInputChange={handleInputChange}
        >
          <b>Mouth Type:</b> {values.mouth}
        </RadioStep>
      </>
    ),
  };
};
