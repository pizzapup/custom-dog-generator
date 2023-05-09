import Accessory from "../../assets/custom-dog/Accessories /Accessories";
import Body from "../../assets/custom-dog/Body";
import Eyes from "../../assets/custom-dog/Eyes";
import Snout from "../../assets/custom-dog/Snout";

export default function Preview({ values, children, ...props }) {
  return (
    <>
      <div className="preview-img-wrapper">
        <Body body={values.body} bodyColor={values.bodyColor} />
        <Eyes eyes={values.eyes} eyeColor={values.eyeColor} />
        <Snout mouth={values.mouth} type={values.nose} />
        {props.accessory && <Accessory accessory={props.accessory} />}
      </div>
      {children}
    </>
  );
}
