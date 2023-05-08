import { Link } from "react-router-dom";
import Preview from "./Preview";
import { Level, H } from "react-accessible-headings";
import { useState } from "react";
import { ref, update } from "firebase/database";
import { database as db } from "../../firebase/firebaseConfig";

export default function DogCard({ data, gridColSize }) {
  const postKey = data.id;
  function archiveMove() {
    console.log(data);
    const updates = {};
    updates["archivedPosts/" + data.id] = data;
    return update(ref(db), updates);
  }
  function archiveRemove() {
    console.log("removing: ", data.id, data.name);
    const updates = {};
    updates["posts/" + data.id] = null;
    return update(ref(db), updates);
  }
  function archivePost() {
    archiveMove();
    archiveRemove();
  }
  const dogName = <span className="dog-name">{data.name}</span>;
  return (
    <>
      <li key={data.id} className="dog-card">
        <div className="dog-card-media">
          <Preview values={data} styles={{ borderRadius: "5px" }} />
        </div>

        <div className="dog-card-text">
          <Level>
            <H>{dogName}</H>
          </Level>
        </div>

        <div>
          {/* <Link to={`/doggallery/${postKey}`} className="dog-card-link"> */}
          <Link to={`/doggallery/${postKey}`} className="dog-card-links">
            <div className="dog-card-links-text">
              {/* <div className="dog-card-link-text"> */}
              <div>
                Learn more about <p>{dogName}</p>
              </div>
              <button onClick={archivePost}>Send {dogName} home</button>
            </div>
          </Link>
        </div>
      </li>
    </>
  );
}
