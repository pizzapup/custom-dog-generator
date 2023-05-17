import {Link} from "react-router-dom";
import {Level, H} from "react-accessible-headings";
import {ref, update} from "firebase/database";
import {database as db} from "../../../firebase/firebaseConfig";
import {AccessoryList} from "../../../assets/custom-dog/Accessory/Accessory";
import DogPreview from "../DogPreview/DogPreview";

export default function DogCard({data}) {
  const postKey = data.id;
  function archiveMove() {
    const updates = {};
    updates["archivedPosts/" + data.id] = data;
    return update(ref(db), updates);
  }
  function archiveRemove() {
    const updates = {};
    updates["posts/" + data.id] = null;
    return update(ref(db), updates);
  }
  function archivePost() {
    archiveMove();
    archiveRemove();
  }
  const handleChange = (e) => {
    const updates = {};
    updates["posts/" + data.id] = {...data, accessory: e.target.value};
    return update(ref(db), updates);
  };
  const dogName = <span className="dog-name">{data.name}</span>;
  return (
    <>
      <li key={data.id} className="dog-card">
        <div className="dog-card-media">
          <DogPreview values={data} styles={{borderRadius: "5px"}}>
            <div className="dog-card-media--overlay-bg"></div>
          </DogPreview>
          <Link
            to={`/doggallery/${postKey}`}
            className="dog-card-media--overlay-link"
          >
            <div className="dog-card-media--overlay-link-text">
              Learn more about <p>{dogName}</p>
            </div>
          </Link>
        </div>

        <div className="dog-card-bottom">
          <Level>
            <H>{dogName}</H>
          </Level>
          <div className="dog-card-bottom--btns">
            <div className="dog-card-bottom--btns-btn">
              <Link to={`/doggallery/${postKey}`}>Profile</Link>
            </div>
            <select
              onChange={handleChange}
              name="accessory"
              value={data.accessory}
              className="dog-card-bottom--btns-btn"
            >
              <option disabled>Add Accessory</option>
              {AccessoryList.map((item, i) => {
                return (
                  <option
                    value={item.name}
                    key={`${item}-${i}`}
                    name="accessory"
                  >
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </li>
    </>
  );
}
{
}
