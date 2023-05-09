import {H, Level} from "react-accessible-headings";
import "../components/DogForm/CreateDog.css";
import DogForm from "../components/DogForm/DogForm";

export default function CreateDog() {
  return (
    <div>
      <H>Custom Dog Illustration</H>
      <Level>
        <DogForm />
      </Level>
    </div>
  );
}
