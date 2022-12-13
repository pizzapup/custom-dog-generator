import { eyes as eyesList } from "./data";
import "./custom-dog.css";

export default function Eyes({
  eyes = "squinty",
  baseColor = "white",
  eyeColor = "green",
  outline = "black",
  rBase = "white",
  rMain = "green",
  rOutline = "black",
}) {
  const colors = {
    base: { fill: baseColor, stroke: baseColor },
    main: { fill: eyeColor, stroke: eyeColor },
    outline: { stroke: outline },
    rBase: { fill: baseColor, stroke: baseColor },
    rMain: { fill: eyeColor, stroke: eyeColor },
    rOutline: { stroke: rOutline },
  };
  const eyesData = eyesList[eyes];
  const list = [];
  for (let p in eyesData) {
    list.push({ ...eyesData[p], ...colors[p] });
  }
  return (
    <>
      <svg viewBox="0 0 3310 3310">
        {list.map((info, index) => (
          <path key={index} {...info} />
        ))}
      </svg>
    </>
  );
}
