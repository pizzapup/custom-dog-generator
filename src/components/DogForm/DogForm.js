import {useEffect, useState} from "react";
import {writeData} from "../../firebase/dbHelpers";
import {fields} from "./data";
import {ntcName} from "../../helpers/colorHelpers";
import Icon from "../../assets/custom-dog/icons";
import DogPreview from "./DogPreview/DogPreview";
import FormStepper from "./FormStepper";
import {ColorStep, RadioStep} from "./Fieldsets";

const uids = "default-user";

export default function DogForm({initialValues}) {
  const [values, setValues] = useState(initialValues);
  const [colorChange, setColorChange] = useState(["bodyColor", "#fafafa"]);
  const handleSubmit = (e) => {
    e.preventDefault();
    writeData(values, ["posts", `user-posts/${uids}`]);
    setValues(initialValues);
    console.log("FORM: values submitted");
  };
  function handleInputChange(e) {
    const {name, value} = e.target;
    setValues({...values, [name]: value});
  }
  function handleColorInputChange(e) {
    const {name, value} = e.target;
    handleInputChange(e);
    setColorChange([name, value]);
  }
  useEffect(() => {
    const name = `${colorChange[0]}Name`;
    const value = ntcName(colorChange[1]);
    setValues({...values, [name]: value});
  }, [colorChange]);

  const Steps = {
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

  // function DisplayValues() {
  //   const list = [];
  //   for (let i in values) {
  //     list.push({name: i, value: values[i]});
  //   }
  //   return (
  //     <ul>
  //       {list.map((item, i) => (
  //         <li key={item.name}>
  //           {item.name} | <b> {item.value}</b>
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }

  return (
    <div className="dog-form-component-wrapper">
      <div className="preview-img-wrapper">
        <DogPreview values={values} />
      </div>
      <form onSubmit={handleSubmit} className="form-content">
        <div className="stepper-content">
          <FormStepper Steps={Steps} StepNames={StepNames} />
        </div>
        <div className="submit-btn-wrapper">
          <button type="submit" className="submit-btn">
            <span className="textTwo">Submit!</span>
            <span className="textOne">Lookin good - let's do this!</span>
          </button>
        </div>
      </form>
    </div>
  );
}
export const StepNames = {
  2: {
    btnData: {
      active: (
        <span>
          <Icon icon="tail-wag" width="45px" /> <span>Body</span>
        </span>
      ),
      default: (
        <span>
          <Icon icon="tail" width="45px" /> <span>Body</span>
        </span>
      ),
    },
    name: "Body",
  },
  3: {
    btnData: {
      active: (
        <span>
          <Icon icon="eye-open" width="45px" /> <span>Eyes</span>
        </span>
      ),
      default: (
        <span>
          <Icon icon="eye-closed" width="45px" /> <span>Eyes</span>
        </span>
      ),
    },
    name: "Eyes",
  },
  4: {
    btnData: {
      active: (
        <span>
          <Icon icon="snout-tongue" width="45px" /> <span>Snout</span>
        </span>
      ),
      default: (
        <span>
          <Icon icon="snout" width="45px" /> <span>Snout</span>
        </span>
      ),
    },
    name: "Snout",
  },
  1: {
    btnData: {
      active: (
        <span>
          <Icon icon="collar" width="45px" /> <span>Info</span>
        </span>
      ),
      default: (
        <span>
          <Icon icon="collar" width="45px" /> <span>Info</span>
        </span>
      ),
    },
    name: "Info",
  },
};
