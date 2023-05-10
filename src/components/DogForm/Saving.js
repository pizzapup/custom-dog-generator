import "./CreateDog.css";
import {useState} from "react";
import Input from "../Input/Input";
import {ColorGroup} from "./ColorGroup/ColorGroup";
import {ntcName} from "../../helpers/colorHelpers";
import {colorData, initialValues, stepFields} from "./data";
import {writeData} from "../../firebase/dbHelpers";
import Preview from "./Preview";
import {H} from "react-accessible-headings";
import {RadioGroup} from "./RadioGroup/RadioGroup";
const uids = "default-user";

export default function DogForm(props) {
  const startingValues = props.intitialData
    ? props.intitialData
    : initialValues;
  const [values, setValues] = useState(startingValues);
  const [step, setStep] = useState(1);
  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setValues({...values, [name]: value});
  };

  const handleStepper = (num, e) => {
    e.preventDefault();
    setStep(num);
  };
  const handleColorInputChange = (e) => {
    console.log(e.target);
    const ecn = ntcName(e.target.value);
    const nameProp =
      e.target.name === "eyeColor" ? "eyeColorName" : "bodyColorName";
    setValues({...values, [nameProp]: ecn, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    writeData(values, ["posts", `user-posts/${uids}`]);
    setValues(initialValues);
  };

  const nums = [1, 2, 3];

  const RadioStep = ({currStep = step}) => (
    <div className="radio-step-container">
      <RadioGroup
        values={stepFields[currStep].values}
        name={stepFields[currStep].name}
        required
        currVal={values[stepFields[currStep].name]}
        onChange={handleInputChange}
        legend={
          <div className="legend">
            {stepFields[currStep].name} Type:{" "}
            {values[stepFields[currStep].name]}
          </div>
        }
        className="blue"
      />
    </div>
  );
  const stepper = {
    1: (
      <div className="form-step">
        <RadioStep />
        <ColorGroup
          name="bodyColor"
          values={colorData.body}
          currVal={values.bodyColor}
          onChange={handleColorInputChange}
          legend={
            <div className="legend">
              Body Color: <span className="upper">{values.bodyColor}</span>
            </div>
          }
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
          onChange={handleColorInputChange}
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
              {stepFields[num].name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <div className="dog-form">
        <div className="dog-form-text-mobile">
          {" "}
          <H> Customize your own pizzapup dog illustration.</H>
          <div className="dog-form-text--subheading">About this dog:</div>
          <Paragraph {...values} step={step} />
        </div>
        <div className="preview-desktop">
          <Preview values={values} size="600px" />
        </div>
        <div className="dog-form-text-wrapper">
          <div className="dog-form-text-desktop">
            {" "}
            <H> Customize your own pizzapup dog illustration.</H>
            <div className="dog-form-text--subheading">About this dog:</div>
            <Paragraph {...values} step={step} />
          </div>
          <Input
            type="text"
            name="name"
            value={values.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <form onSubmit={handleSubmit} className="create-dog-form">
          <div className="form-steps">
            {Stepper}
            {step && stepper[step]}
            <div className="stepper-btns">
              {step !== 1 && (
                <button
                  className="previous-next-btn previous-btn"
                  title={`customize ${stepFields[step - 1].name}`}
                  onClick={(e) => handleStepper(step - 1, e)}
                >
                  back
                  <span className="sr-only">
                    back: edit {stepFields[step - 1].name}
                  </span>
                </button>
              )}
              {step !== 3 && (
                <button
                  className="previous-next-btn next-btn"
                  title={`customize ${stepFields[step + 1].name}`}
                  onClick={(e) => handleStepper(step + 1, e)}
                >
                  next
                  <span className="sr-only">next:</span>
                </button>
              )}
            </div>
            <div className="button-wrap">
              {" "}
              <button className="dog-form-submit-btn" type="submit">
                Submit?
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export const Paragraph = (values, step) => {
  const {bodyColor, eyeColor} = values;
  const ColorCombo = ({color, text}) => (
    <>
      My {text} color is
      <span
        className="paragraph-answers answer-color"
        style={{
          textDecorationColor: `${color}`,
        }}
      >
        <span className="upper">{color}</span>
      </span>{" "}
      or
      <span
        className="paragraph-answers answer-color"
        style={{
          textDecorationColor: `${color}`,
        }}
      >
        {ntcName(color)}
      </span>
      .
    </>
  );
  return (
    <>
      <div className="dog-form-text--description">
        <ul>
          <li>Hello!</li>
          <li>
            My name is{" "}
            <span className="paragraph-answers dog-name">{values.name}</span>.
          </li>
          <li>
            I have a <span className="paragraph-answers">{values.body}</span>{" "}
            body, <span className="paragraph-answers">{values.eyes}</span> eyes,
            and a <span className="paragraph-answers">{values.nose}</span> nose.
          </li>
          <li>
            <ColorCombo text="coat" color={bodyColor} />
          </li>
          <li>
            <ColorCombo text="eye" color={eyeColor} />
          </li>
        </ul>
      </div>
    </>
  );
};
