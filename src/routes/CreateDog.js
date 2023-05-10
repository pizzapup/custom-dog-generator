import {H, Level} from "react-accessible-headings";
import DogForm from "../components/DogForm/DogForm";
import {defaultValues} from "../components/DogForm/data";

export default function CreateDog() {
  return (
    <div>
      <H>Custom Dog Illustration</H>
      <Level>
        <DogForm initialValues={defaultValues} />
      </Level>
    </div>
  );
}
