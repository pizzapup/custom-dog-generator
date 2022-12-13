import { noses } from "./data";
import "./custom-dog.css";

const Mouth = ({ mouth, mouthType, color }) => {
  return mouth !== "tongue" ? (
    <svg viewBox="0 0 3310 3310">
      <path {...mouthType} {...color} />
    </svg>
  ) : (
    <svg viewBox="0 0 3310 3310">
      <path d={mouthType.outline} {...color.outline} />
      <path d={mouthType.fill} {...color.tongue} />
    </svg>
  );
};

export default function Snout({
  stroke = "black",
  mouthColor = "black",
  noseColor = "black",
  tongueColor = "pink",
  nose = "long",
  mouth = "straight",
}) {
  const noseData = noses[nose];
  const noseOptions = noseData.options;
  const mouthType = noseOptions[mouth];
  const colors = {
    outline: { fill: "transparent", stroke: mouthColor },
    main: { fill: mouthColor, stroke: "transparent" },
    tongue: {
      outline: { fill: mouthColor, stroke: "transparent" },
      tongue: { fill: tongueColor, stroke: "transparent" },
    },
  };
  const color = colors[mouthType.className];
  return (
    <>
      <svg viewBox="0 0 3310 3310">
        <path d={noseData.path} fill={noseColor} />
      </svg>
      <Mouth mouth={mouth} mouthType={mouthType} color={color} />
    </>
  );
}
