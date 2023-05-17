import {useEffect, useState} from "react";
import {database} from "../../../firebase/firebaseConfig";
import {onValue, ref} from "firebase/database";
import DogCard from "./DogCard";

export default function DogGallery() {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    const dbRef = ref(database, `posts`);
    onValue(dbRef, (snapshot) => {
      const posts = snapshot.val();
      const postList = [];
      for (let id in posts) {
        postList.push({id, ...posts[id]});
      }
      setResponse(postList);
    });
  }, []);

  return (
    <div className="dog-gallery">
      <ul className="dog-gallery--cards">
        {response.map((data, index) => (
          <DogCard data={data} key={data.id} />
        ))}
      </ul>
    </div>
  );
}
