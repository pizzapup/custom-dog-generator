import {Link} from "react-router-dom";
import Sparkles from "../Sparkles/Sparkles";
import DogPreview from "../DogForm/DogPreview/DogPreview";
import {Slideshow} from "../Slideshow/Slideshow";
// import "./Hero.css";

export default function Hero() {
  return (
    <>
      <div className="hero">
        {/* <div className="hero-full-content"> */}
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-h1">
              <div className="h1-stars">&#10024; </div>
              <h1>Custom Dog Generator</h1>
              <div className="h1-stars">&#10024; </div>
            </div>
            <div className="hero-text-mid">
              Create your own custom dog illustration!
              <br /> <br />
              Check out the current dogs having a great time on display in the{" "}
              <Link to="/doggallery">Gallery</Link>
            </div>
            <div className="sparkles-btn">
              <Sparkles className="hero-btn">
                <Link to="/createdog" className="hero-btn-link">
                  Let's do this
                </Link>
              </Sparkles>
            </div>
          </div>
          <div className="hero-slideshow">
            <Slideshow />
          </div>
        </div>
        <div className="decor-imgs">
          <div className="decor-img decor-img-skate">
            <div></div>
          </div>
          <div className="decor-img decor-img-hat">
            <div></div>
          </div>
          <div className="decor-img decor-img-trapper">
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
