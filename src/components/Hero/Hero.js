import {Link} from "react-router-dom";
import Sparkles from "../Sparkles/Sparkles";
import DogPreview from "../DogForm/DogPreview/DogPreview";
import {Slideshow} from "../Slideshow/Slideshow";
// import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero-page-wrapper">
      <div className="hero-bg">
        <DogPreview />
        <DogPreview />
        <DogPreview />
        <DogPreview />
        <DogPreview />
        <DogPreview />
        <DogPreview />
        <DogPreview />
        <span className="dp-sm">
          <DogPreview />
        </span>
      </div>
      <div className="hero">
        <div className="hero-inner">
          <div className="hero-text">
            <div className="hero-h1">
              <div className="h1-stars">&#10024; </div>
              <h1>Custom Dog Generator</h1>
              <div className="h1-stars">&#10024; </div>
            </div>
            <div>
              Create your own custom dog illustration using the Pizzapup Custom
              Dog Generator. <br />
              Check out the current dogs having a great time on display in the{" "}
              <Link to="/doggallery" className="hero-link-inText">
                Gallery
              </Link>
              .{/* <p> Some of them have fancy shoes 👠🥾</p> */}
            </div>
            <div className="sparkle-wrapper">
              <h2>Ready to design your own dog illustration? </h2>
              <div className="sparkles-btn">
                <Sparkles className="hero-btn">
                  <Link to="/createdog" className="hero-btn hero-btn-btn">
                    Let's do this
                  </Link>
                </Sparkles>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-preview">
          <Slideshow />
        </div>
      </div>
    </div>
  );
}
