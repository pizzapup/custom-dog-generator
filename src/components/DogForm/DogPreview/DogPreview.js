import PreviewImage from "../../../assets/custom-dog";

export default function DogPreview({values, children}) {
  return (
    <>
      <div className="dog-preview">
        <PreviewImage.Body
          body={values.body}
          bodyColor={values.bodyColor}
          outlineColor={values.outlineColor}
        />
        <PreviewImage.Eyes
          eyes={values.eyes}
          eyeColor={values.eyeColor}
          outlineColor={values.outlineColor}
        />
        <PreviewImage.Snout
          mouth={values.mouth}
          type={values.nose}
          outlineColor={values.outlineColor}
        />
        {values.accessory !== "none" && (
          <PreviewImage.Accessory accessory={values.accessory} />
        )}
      </div>
      {children}
    </>
  );
}
