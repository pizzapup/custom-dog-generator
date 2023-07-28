import {useEffect, useState} from "react";
import {writeData} from "../../firebase/dbHelpers";
import {ntcName} from "../../helpers/colorHelpers";
import DogPreview from "./DogPreview/DogPreview";
import {Link} from "react-router-dom";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {StepNames} from "./Steps/StepNames";
import Stepper from "./Steps/Stepper";
import {StepContent} from "./Steps/StepContent";
const uids = "default-user";

export default function DogForm({initialValues}) {
  const [values, setValues] = useState(initialValues);
  const [colorChange, setColorChange] = useState(["bodyColor", "#fafafa"]);

  const handleSubmit = (e) => {
    e.preventDefault();
    writeData(values, ["posts", `user-posts/${uids}`]);
    setValues(initialValues);
    toast(
      <div className="lil-toast">
        <div>
          Lookin good! Check out <span className="proper">{values.name}</span>{" "}
          in the <Link to="/doggallery">Gallery</Link>
        </div>
      </div>,
      {
        icon: "🚀",
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      }
    );
  };
  function handleInputChange(e) {
    const {name, value} = e.target;
    setValues({...values, [name]: value});
  }
  function handleColorInputChange(e) {
    const {name, value} = e.target;
    setValues({...values, [name]: value});
    setColorChange([name, value]);
  }
  useEffect(() => {
    let value = ntcName(colorChange[1]);
    const name = `${colorChange[0]}Name`;
    setValues({...values, [name]: `${value}`});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorChange]);

  const Steps = StepContent({
    values,
    handleInputChange,
    handleColorInputChange,
  });

  return (
    <div className="dog-form-component-wrapper">
      <ToastContainer />
      <div className="preview-img-wrapper">
        <DogPreview values={values} />
      </div>
      <form onSubmit={handleSubmit} className="form-content">
        <div className="stepper-content">
          <Stepper Steps={Steps} StepNames={StepNames} />
        </div>
        <div className="submit-btn-wrapper">
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
