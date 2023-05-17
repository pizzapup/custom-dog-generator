import {useState} from "react";
import {range} from "../../helpers/mathHelpers";
import {ArrowL, ArrowR} from "../../assets/icons/ArrowIcons";

const StepItems = {
  1: <>Step One</>,
  2: <>Step Two</>,
  3: <>Step Three</>,
};

export default function FormStepper(props) {
  const Steps = props.Steps ? props.Steps : StepItems;
  const numberOfSteps = Object.keys(Steps).length + 1;
  const nums = range(1, numberOfSteps);
  const [step, setStep] = useState(1);
  const handleNextBtn = (btnType, e) => {
    e.preventDefault();
    const x = btnType === "previous" ? -1 : +1;
    const newStep = step + x;
    setStep(newStep);
  };
  const handleStepper = (num, e) => {
    e.preventDefault();
    setStep(num);
  };
  return (
    <div className="form-step">
      <div className="form-step-header">
        <ul className="step-navbar-ul">
          {nums.map((num, index) => (
            <li key={index} className="step-navbar-li">
              <button
                value={num}
                onClick={(e) => handleStepper(num, e)}
                className={step === num ? "active" : ""}
              >
                {props.StepNames
                  ? step === num
                    ? props.StepNames[num].btnData.active
                    : props.StepNames[num].btnData.default
                  : step}
              </button>
            </li>
          ))}
        </ul>
        <div className="step-title"> {props.StepNames[step].name}</div>
      </div>
      <div className="form-step-content-wrapper">
        <div className="form-step-content">{Steps[step]}</div>
        <div className="prev-next-btns">
          <button
            type="button"
            className={step === 1 ? "prev notShowing" : "prev isShowing"}
            onClick={(e) => handleNextBtn("previous", e)}
          >
            <div>
              <ArrowL />
              <div>Back</div>
            </div>
          </button>
          <button
            type="button"
            className={step === 4 ? "next notShowing" : "next isShowing"}
            onClick={(e) => handleNextBtn("next", e)}
          >
            <div>
              <div>Next</div>
              <ArrowR />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
