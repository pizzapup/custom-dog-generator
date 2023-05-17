import Icons from "./DogIcons";

const Icon = ({icon, width, color = "default"}) => {
  const styling = color === "default" ? {} : {fill: color, stroke: color};
  const CurrIcon = Icons[icon];
  return <CurrIcon styling={styling} width={width} />;
};
export default Icon;
