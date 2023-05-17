import {Link} from "react-router-dom";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SubmittedToast({name = "error?"}) {
  const ToastContent = () => (
    <>
      Lookin GOOD! Check out {name} in the
      <Link to="/doggallery">Gallery</Link>
    </>
  );
  const notify = () => toast.success(<ToastContent />, {icon: "🚀"});

  return (
    <>
      {/* <button type="button" onClick={notify}>
        Submit
      </button> */}
      <ToastContainer />
    </>
  );
}
