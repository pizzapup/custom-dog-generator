import {Link} from "react-router-dom";
import "./Hero.css";
import DogPreview from "../DogForm/DogPreview/DogPreview";

export default function Hero() {
  return (
    <>
      <div className="hero-prev">
        <DogPreview />
        <DogPreview />
        <DogPreview />
        <DogPreview />
        <DogPreview />
        <DogPreview />
        <DogPreview />
        <DogPreview />
        <DogPreview />
      </div>
      <div className="hero">
        <div className="hero-section">
          <h1>Custom Dog Generator</h1>
          <h2> by Pizzapup </h2>
          <Link className="hero-btn" to="/createdog">
            Start Customizing
          </Link>
        </div>
      </div>
    </>
  );
}

/* DRAW DUCKS IN RAINJACKETS ! <3 :-) shopify, society6, etsy?, buy me a coffee */
