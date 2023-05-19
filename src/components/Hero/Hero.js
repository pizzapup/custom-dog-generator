import {Link} from "react-router-dom";
import Sparkles from "../Sparkles/Sparkles";
import DogPreview from "../DogForm/DogPreview/DogPreview";
import {Slideshow} from "../Slideshow/Slideshow";
// import "./Hero.css";

export default function Hero() {
  return (
    <>
      <div className="hero">
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
        <div className="hero-inner">
          <h1>&#10024; Custom Dog Generator &#10024;</h1>

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
              <Sparkles></Sparkles>
              <Link to="/createdog" className="hero-btn">
                Let's do this
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-preview">
        <Slideshow />
      </div>
    </>
  );
}
