import "./CreateDog.css";
import { useState } from "react";
import Input, { RadioGroup } from "../components/Input/Input";
import Body from "../assets/custom-dog/Body";
import Eyes from "../assets/custom-dog/Eyes";
import Snout from "../assets/custom-dog/Snout";
export default function CreateDog() {
  const initialValues = {
    name: "fido",
    eyes: "squinty",
    body: "medium",
    nose: "snout",
    bodyColor: "#c7875b",
    eyeColor: "#2b9145 ",
  };
  const [values, setValues] = useState(initialValues);
  const [step, setStep] = useState(1);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // writeData(values, ["posts", `user-posts/${uids}`]);
  };

  const steps = {
    1: {
      name: "body",
      values: [
        { value: "regular", type: "radio" },
        { value: "medium", type: "radio" },
        { value: "chonky", type: "radio" },
      ],
    },
    2: {
      name: "eyes",
      values: [
        { value: "squinty", type: "radio" },
        { value: "closed", type: "radio" },
        { value: "round", type: "radio" },
      ],
    },
    3: {
      name: "nose",
      values: [
        { value: "long", type: "radio" },
        { value: "button", type: "radio" },
        { value: "heart", type: "radio" },
      ],
    },
    4: {
      name: "mouth",
      values: [
        { value: "smile", type: "radio" },
        { value: "straight", type: "radio" },
        { value: "tongue", type: "radio" },
      ],
    },
    5: { name: "bodyColor", label: "Body Color" },
    5: { name: "eyeColor", label: "Eye Color" },
  };
  const RadioStep = (
    <RadioGroup
      values={steps[step].values}
      name={steps[step].name}
      currVal={values[steps[step].name]}
      onChange={handleInputChange}
    />
  );
  const ColorStep = (
    <>
      <fieldset className="colorgroup">
        <legend>Color</legend>
        <Input
          type="color"
          name="bodyColor"
          label="Body Color"
          value={values.bodyColor}
          onChange={handleInputChange}
        />
        <Input
          type="color"
          name="eyeColor"
          label="Eye Color"
          value={values.eyeColor}
          onChange={handleInputChange}
        />
      </fieldset>
    </>
  );
  const stepper = {
    1: RadioStep,
    2: RadioStep,
    3: RadioStep,
    4: RadioStep,
    5: ColorStep,
  };

  return (
    <>
      <div className="product">
        <div className="product-img-wrapper">
          <div className="chonk-container">
            <Body body={values.body} bodyColor={values.bodyColor} />
            <Eyes eyes={values.eyes} eyeColor={values.eyeColor} />
            <Snout mouth={values.mouth} nose={values.nose} />
          </div>
        </div>
        <div className="product-text-wrapper">
          <h1>Custom Dog Illustration</h1>
          <div className="product-text--subheading">
            Customize your own pizzapup dog illustration.
          </div>
          <div className="product-text--description">
            "Hello! My name is {values.name}. I am mostly the color{" "}
            <span
              style={{
                textDecoration: `${values.bodyColor} underline`,
              }}
            >
              {values.color}
            </span>
            . I have a {values.nose} nose. My eyes are the color{" "}
            <span
              style={{
                textDecoration: `${values.eyeColor} underline`,
              }}
            >
              {values.eyeColor}
            </span>{" "}
            and {values.eyes}. I have a {values.body} body."
          </div>
          <div className="form-nav">
            <ul>
              <li>
                <button className="form-nav-btn" onClick={() => setStep(1)}>
                  Body
                </button>
              </li>
              <li>
                <button className="form-nav-btn" onClick={() => setStep(2)}>
                  Eyes
                </button>
              </li>
              <li>
                <button className="form-nav-btn" onClick={() => setStep(3)}>
                  Nose
                </button>
              </li>
              <li>
                <button className="form-nav-btn" onClick={() => setStep(4)}>
                  Snout
                </button>
              </li>
              <li>
                <button className="form-nav-btn" onClick={() => setStep(5)}>
                  Color
                </button>
              </li>
            </ul>
          </div>
          <form onSubmit={handleSubmit} className="create-dog-form">
            <Input
              type="text"
              name="name"
              value={values.name}
              onChange={handleInputChange}
            />
            {step && stepper[step]}
            <button>submit button ?</button>
          </form>
        </div>
      </div>
    </>
  );
}
