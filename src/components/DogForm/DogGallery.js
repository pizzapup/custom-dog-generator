import { useEffect, useState } from "react";
import { database } from "../../firebase/firebaseConfig";
import { onValue, ref } from "firebase/database";
import DogDetail from "./DogDetail";
import { useNavigate } from "react-router-dom";
import DogCard from "./DogCard";

export default function DogGallery() {
  const [response, setResponse] = useState([]);
  const [viewRecipe, setViewRecipe] = useState(false);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  useEffect(() => {
    const dbRef = ref(database, `posts`);
    onValue(dbRef, (snapshot) => {
      const posts = snapshot.val();
      const postList = [];
      for (let id in posts) {
        postList.push({ id, ...posts[id] });
      }
      setResponse(postList);
    });
  }, []);

  return (
    <div>
      {viewRecipe ? (
        <DogDetail />
      ) : (
        <ul className="gallery-cards">
          {response.map((data, index) => (
            <DogCard data={data} key={data.id} />
          ))}
        </ul>
      )}
    </div>
  );
}
