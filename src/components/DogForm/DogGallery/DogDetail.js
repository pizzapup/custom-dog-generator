import {database as db} from "../../../firebase/firebaseConfig";
import {ref, update, onValue} from "firebase/database";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {H, Level} from "react-accessible-headings";
import DogPreview from "../DogPreview/DogPreview";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function DogDetail() {
  const {id} = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  useEffect(() => {
    const dbRef = ref(db, `posts/${id}`);
    onValue(dbRef, (snapshot) => {
      const response = snapshot.val();
      setData(response);
    });
  }, [id]);

  function archiveMove() {
    const updates = {};
    updates["archivedPosts/" + id] = data;
    return update(ref(db), updates);
  }
  function archiveRemove() {
    console.log("DETAIL: removing: ", id, data.name);
    const updates = {};
    updates["posts/" + id] = null;
    return update(ref(db), updates);
  }

  function archivePost() {
    archiveMove();
    archiveRemove();
    navigate("/doggallery");
  }
  function archivePrompt() {
    toast.warn(
      <div className="details-toast">
        <span className="prompt">Are you sure?</span>{" "}
        <span className="subprompt">
          This pup will be removed from the database.
        </span>{" "}
        <div className="prompt-btns">
          <button type="button" onClick={archivePost} className="yes">
            Yes, run free!
          </button>{" "}
          <button type="button" className="nvm">
            Nevermind
          </button>
        </div>
      </div>,
      {
        autoClose: false,
        position: "top-center",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    );
  }
  function updatePost({data}) {
    const updates = {};
    updates["posts/" + id] = data;
    return update(ref(db), updates);
  }
  return (
    <>
      <Level>
        <H>Details About {data.name}</H>
        <div id={id} className="dog-details">
          <div className="preview-container">
            <DogPreview values={data} />
          </div>

          <div className="dog-details-textpanel">
            <ToastContainer />
            <ul>
              <li className="proper li-name sub-li ">
                <div>
                  {" "}
                  <Level>
                    <H className="li-ul-heading">Name</H>
                  </Level>{" "}
                  <span className="li-title">Name:</span>{" "}
                  <span className="proper">{data.name}</span>
                </div>
              </li>
              <li className="sub-li li-appearance-ul">
                <ul>
                  <Level>
                    <H className="li-ul-heading">Appearance</H>
                  </Level>{" "}
                  <li>
                    <span className="li-title">Snout: </span>
                    <span className="proper">{data.nose}</span> nose with{" "}
                    {data.mouth === "tongue"
                      ? "tongue sticking out"
                      : data.mouth === "straight"
                      ? "a straight mouth"
                      : data.mouth}
                  </li>
                  <li className="proper">
                    <span className="li-title">Eyes: </span>{" "}
                    <span className="proper">{data.eyes}</span> |{" "}
                    {data.eyeColorName} ({data.eyeColor}){" "}
                    <span
                      className="color-preview"
                      style={{
                        "--currColor": data.eyeColor,
                        color: data.eyeColor,
                      }}
                    >
                      color
                    </span>
                  </li>
                  <li className="proper">
                    <span className="li-title">Body: </span>
                    {data.body} | {data.bodyColorName} ({data.bodyColor}){" "}
                    <span
                      className="color-preview"
                      style={{
                        "--currColor": data.bodyColor,
                        color: data.bodyColor,
                      }}
                    >
                      color
                    </span>
                  </li>
                </ul>
              </li>
              <li className="li-about-ul sub-li ">
                <ul>
                  {" "}
                  <Level>
                    <H className="li-ul-heading">Personality</H>
                  </Level>{" "}
                  <li>
                    <span className="li-title">Favorite Toy:</span>{" "}
                    {data.favtoy ? data.favtoy : "still figuring it out"}
                  </li>
                  <li>
                    <div className="li-about">
                      {" "}
                      <div>
                        <span className="li-title">About {data.name}: </span>
                      </div>
                      <div className="li-about-data">
                        {data.about ? data.about : "still figuring it out"}
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              {data.timestamp && <li>{data.timestamp}</li>}
            </ul>
            <div className="btns">
              <button onClick={archivePrompt}>send home</button>
              {/* <button onClick={initUpdate}>update</button> */}
              <button onClick={goBack}>go back to gallery</button>
            </div>
          </div>
        </div>
      </Level>
    </>
  );
}
