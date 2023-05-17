import {database as db} from "../../../firebase/firebaseConfig";
import {ref, update, onValue} from "firebase/database";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {H, Level} from "react-accessible-headings";
import DogPreview from "../DogPreview/DogPreview";

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
  function updatePost({data}) {
    const updates = {};
    updates["posts/" + id] = data;
    return update(ref(db), updates);
  }
  return (
    <>
      <div id={id} className="dog-details">
        <div>
          <DogPreview values={data} />
        </div>

        <div className="dog-details-textpanel">
          <Level>
            <H>{data.name}</H>
          </Level>

          <ul>
            <li>Name: {data.name}</li>
            <li>
              Snout: <span className="proper">{data.nose}</span> nose with{" "}
              {data.mouth === "tongue"
                ? "tongue sticking out"
                : data.mouth === "straight"
                ? "a straight mouth"
                : data.mouth}
            </li>

            <li className="proper">
              Eyes: {data.eyes} | {data.eyeColorName} ({data.eyeColor})
            </li>
            <li className="proper">
              Body: {data.body} | {data.bodyColorName} ({data.bodyColor})
            </li>
            {data.timestamp && <li>{data.timestamp}</li>}
          </ul>
          <button onClick={archivePost}>send home</button>
          {/* <button onClick={initUpdate}>update</button> */}
          <button onClick={goBack}>go back to gallery</button>
        </div>
      </div>
    </>
  );
}
