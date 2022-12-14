import "./CreateDog.css";
import { useState } from "react";
import Input, { RadioGroup } from "../components/Input/Input";
import Body from "../assets/custom-dog/Body";
import Eyes from "../assets/custom-dog/Eyes";
import Snout from "../assets/custom-dog/Snout";
import { getNtc, hexToRGB } from "../helpers/colorHelpers";
export default function CreateDog() {
  const initialValues = {
    name: "fido",
    eyes: "squinty",
    body: "medium",
    nose: "long",
    bodyColor: "#c7875b",
    eyeColor: "#2b9145",
  };
  const [values, setValues] = useState(initialValues);
  const [step, setStep] = useState(1);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted", values);
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
  };
  const RadioStep = ({ currStep = step }) => (
    <>
      <RadioGroup
        values={steps[currStep].values}
        name={steps[currStep].name}
        currVal={values[steps[currStep].name]}
        onChange={handleInputChange}
        legend={<div className="legend">{steps[currStep].name}</div>}
      />
    </>
  );

  const stepper = {
    1: (
      <>
        <RadioStep />
        <Input
          type="color"
          name="bodyColor"
          value={values.bodyColor}
          onChange={handleInputChange}
          label={<div className="legend">Body Color: {values.bodyColor}</div>}
        />
      </>
    ),
    2: (
      <>
        <RadioStep />
        <Input
          type="color"
          name="eyeColor"
          label={<div className="legend">Eye Color: {values.eyeColor}</div>}
          value={values.eyeColor}
          onChange={handleInputChange}
        />
      </>
    ),
    3: (
      <>
        <RadioStep currStep={3} />
        <RadioStep currStep={4} />
      </>
    ),
  };
  const nums = [1, 2, 3];
  const handleStepper = (num, e) => {
    e.preventDefault();
    setStep(num);
  };
  const Stepper = (
    <div className="form-nav">
      <ul>
        {nums.map((num, index) => (
          <li
            className={`form-nav-item  ${
              step === num && "form-nav-item--active "
            }`}
            key={index}
          >
            <button
              className="form-nav-btn "
              value={num}
              onClick={(e) => handleStepper(num, e)}
            >
              {steps[num].name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
  return (
    <>
      <div className="product">
        <div className="product-img-wrapper">
          <div className="chonk-container">
            <Body body={values.body} bodyColor={values.bodyColor} />
            <Eyes eyes={values.eyes} eyeColor={values.eyeColor} />
            <Snout mouth={values.mouth} type={values.nose} />
          </div>
        </div>
        <div className="product-text-wrapper">
          <h1>Custom Dog Illustration</h1>
          <div className="product-text--subheading">
            Customize your own pizzapup dog illustration.
          </div>
          <Paragraph {...values} />
          <form onSubmit={handleSubmit} className="create-dog-form">
            <Input
              type="text"
              name="name"
              value={values.name}
              onChange={handleInputChange}
            />
            <div className="form-steps">
              {Stepper}
              {step && stepper[step]}
              {step}
              <div className="stepper-btns">
                {step !== 1 && (
                  <button
                    className="previous-next-btn"
                    onClick={() => setStep(step - 1)}
                  >
                    go back to {steps[step - 1].name}
                  </button>
                )}
                {step !== 3 && (
                  <button
                    className="previous-next-btn"
                    onClick={() => setStep(step + 1)}
                  >
                    next selection(edit {steps[step + 1].name})
                  </button>
                )}
              </div>
              <button type="submit">Submit?</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export const Paragraph = (values) => {
  return (
    <>
      <div className="product-text--description">
        "Hello! My name is {values.name}. I am mostly the color{" "}
        <span
          style={{
            textDecoration: `${values.bodyColor} underline`,
          }}
        >
          {values.bodyColor}
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
    </>
  );
};
