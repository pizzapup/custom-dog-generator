import {useEffect, useRef, useState} from "react";
import {AccessoryList} from "../../assets/custom-dog/Accessory/Accessory";
import DogPreview from "../DogForm/DogPreview/DogPreview";

const delay = 2500;

export function Slideshow() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === AccessoryList.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{transform: `translate3d(${-index * 100}%, 0, 0)`}}
      >
        {AccessoryList.map((accessory, i) => (
          <div className="slide" key={`accessory=${i}`}>
            <DogPreview accessory={accessory.name} />
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {AccessoryList.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
