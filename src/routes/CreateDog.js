import "./CreateDog.css";
import { useState } from "react";
import Input, { RadioGroup } from "../components/Input/Input";
import { ColorGroup } from "../components/Input/ColorGroup";
import Body from "../assets/custom-dog/Body";
import Eyes from "../assets/custom-dog/Eyes";
import Snout from "../assets/custom-dog/Snout";
import { getNtc, hexToRGB } from "../helpers/colorHelpers";
import { colorData } from "./data";
import { writeData } from "../firebase/dbHelpers";
const uids = "default-user";
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
  const handleStepper = (num, e) => {
    e.preventDefault();
    setStep(num);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted", values);
    writeData(values, ["posts", `user-posts/${uids}`]);
  };
  const nums = [1, 2, 3];
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
        legend={
          <div className="legend">
            {steps[currStep].name} Type: {values[steps[currStep].name]}
          </div>
        }
      />
    </>
  );

  const stepper = {
    1: (
      <div className="form-step">
        <RadioStep />
        <ColorGroup
          name="bodyColor"
          values={colorData.body}
          currVal={values.bodyColor}
          onChange={handleInputChange}
          legend={<div className="legend">Body Color: {values.bodyColor}</div>}
        />
      </div>
    ),
    2: (
      <div className="form-step">
        <RadioStep />
        <ColorGroup
          name="eyeColor"
          values={colorData.eyes}
          currVal={values.eyeColor}
          onChange={handleInputChange}
          legend={<div className="legend">Eye Color: {values.eyeColor}</div>}
        />
      </div>
    ),
    3: (
      <div className="form-step">
        <RadioStep currStep={3} />
        <RadioStep currStep={4} />
      </div>
    ),
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
        <Preview values={values} className="preview-desktop" />
        <div className="product-text-wrapper">
          <h1>Custom Dog Illustration</h1>
          <div className="product-text--subheading">
            Customize your own pizzapup dog illustration.
          </div>
          <Paragraph {...values} />
          <form onSubmit={handleSubmit} className="create-dog-form">
            <Preview values={values} className="preview-mobile" />
            <Input
              type="text"
              name="name"
              value={values.name}
              onChange={handleInputChange}
            />
            <div className="form-steps">
              {Stepper}
              {step && stepper[step]}
              <div className="stepper-btns">
                {step !== 1 && (
                  <button
                    className="previous-next-btn previous-btn"
                    title={`customize ${steps[step - 1].name}`}
                    onClick={(e) => handleStepper(step - 1, e)}
                  >
                    back
                    <span className="sr-only">
                      back: edit {steps[step - 1].name}
                    </span>
                  </button>
                )}
                {step !== 3 && (
                  <button
                    className="previous-next-btn next-btn"
                    title={`customize ${steps[step + 1].name}`}
                    onClick={(e) => handleStepper(step + 1, e)}
                  >
                    next
                    <span className="sr-only">next:</span>
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
export const Preview = ({ values, className }) => (
  <div className={`product-img-wrapper ${className}`}>
    <div className="chonk-container">
      <Body body={values.body} bodyColor={values.bodyColor} />
      <Eyes eyes={values.eyes} eyeColor={values.eyeColor} />
      <Snout mouth={values.mouth} type={values.nose} />
    </div>
  </div>
);
export const Paragraph = (values) => {
  return (
    <>
      <div className="product-text--description">
        "Hello! My name is <b>{values.name}</b>. I am mostly the color{" "}
        <span
          style={{
            textDecoration: `${values.bodyColor} underline`,
            fontWeight: "bold",
          }}
        >
          {values.bodyColor}
        </span>
        . I have a <b>{values.nose}</b> nose. My eyes are the color{" "}
        <span
          style={{
            textDecoration: `${values.eyeColor} underline`,
            fontWeight: "bold",
          }}
        >
          {values.eyeColor}
        </span>{" "}
        and <b>{values.eyes}</b>. I have a <b>{values.body}</b> body."
      </div>
    </>
  );
};
