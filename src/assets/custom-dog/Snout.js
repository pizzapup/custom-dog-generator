import { noses } from "./data";
import "./custom-dog.css";

const Mouth = ({ mouth, mouthType, color }) => {
  return mouth !== "tongue" ? (
    <svg viewBox="0 0 3200 3200">
      <path {...mouthType} {...color} />
    </svg>
  ) : (
    <svg viewBox="0 0 3200 3200">
      <path d={mouthType.outline} fill="black" stroke="transparent" />
      <path d={mouthType.fill} fill="pink" stroke="transparent" />
    </svg>
  );
};

export default function Snout({ type = "long", mouth = "smile" }) {
  const noseData = noses[type];
  const noseOptions = noseData.options;
  const mouthType = noseOptions[mouth];
  const colors = {
    outline: { fill: "transparent", stroke: "black" },
    main: { fill: "black", stroke: "transparent" },
    tongue: {
      outline: { fill: "black", stroke: "transparent" },
      tongue: { fill: "pink", stroke: "transparent" },
    },
  };
  const color = colors[mouthType.className];
  return (
    <>
      <svg viewBox="0 0 3200 3200">
        <path d={noseData.path} fill="black" />
      </svg>
      <Mouth mouth={mouth} mouthType={mouthType} color={color} />
    </>
  );
}
