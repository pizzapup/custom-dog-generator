import { Link } from "react-router-dom";
import Preview from "./Preview";
import { Level, H } from "react-accessible-headings";
import { ref, update } from "firebase/database";
import { database as db } from "../../firebase/firebaseConfig";
import { useState } from "react";
import { AccessoryList } from "../../assets/custom-dog/Accessories /Accessories";

export default function DogCard({ data }) {
  const postKey = data.id;
  const [clicked, setClicked] = useState(false);
  const [accessory, setAccessory] = useState("");
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
  const handleChange = (e) => {
    setAccessory(e.target.value);
    console.log("TEST", e.target.value);

    const updates = {};
    updates["posts/" + data.id] = { ...data, accessory: accessory };
    return update(ref(db), updates);
  };
  const dogName = <span className="dog-name">{data.name}</span>;
  return (
    <>
      <li key={data.id} className="dog-card">
        <div className="dog-card-media">
          <Preview
            accessory={accessory}
            values={data}
            styles={{ borderRadius: "5px" }}
          >
            <div className="dog-card-media-img"></div>
          </Preview>

          <Link to={`/doggallery/${postKey}`} className="dog-card-link">
            <div className="dog-card-link-text">
              <div>
                Learn more about <p>{dogName}</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="dog-card-text">
          <Level>
            <H>{dogName}</H>
          </Level>
          <div className="dog-card-text-btns">
            <button onClick={archivePost}>Send home</button>
            <button onClick={() => setClicked(!clicked)}>
              Add accessories
            </button>
          </div>
        </div>
        <div
          className={`dog-card-text-accessories ${
            clicked && "dog-card-text-accessories-open"
          }`}
        >
          <fieldset>
            <legend>Accessories</legend>
            <select
              className="dog-card-text-accessories-list"
              onChange={handleChange}
              name="accessory"
            >
              <option disabled selected value>
                --select--
              </option>
              {AccessoryList.map((item, i) => {
                return (
                  <option
                    value={item.name}
                    key={`${item}-${i}`}
                    onChange={handleChange}
                  >
                    {item.name}
                  </option>
                );
              })}
            </select>
          </fieldset>
        </div>
      </li>
    </>
  );
}
{
  /* <div>
          <Link to={`/doggallery/${postKey}`} className="dog-card-link">
            <div className="dog-card-link-text">
              <div>
                Learn more about <p>{dogName}</p>
              </div>
            </div>
          </Link>
        </div>  */
}
