import {Link} from "react-router-dom";
import Sparkles from "../Sparkles/Sparkles";
export default function Hero() {
  return (
    <>
      <div className="hero">
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
            <div>
              <Sparkles>
                <Link to="/createdog" className="hero-btn">
                  <Sparkles> Lets do this</Sparkles>
                </Link>
              </Sparkles>
            </div>
          </div>
        </div>
        <div className="imgs">
          <div className="imgs-img img0">
            <div className="imgs-inner"></div>
            <div className="imgs-inner2"></div>
          </div>
          <div className="imgs-img img1">
            <div className="imgs-inner"></div>
            <div className="imgs-inner2"></div>
          </div>
          <div className="imgs-img img2">
            <div className="imgs-inner"></div>
            <div className="imgs-inner2"></div>
          </div>
          <div className="imgs-img img3">
            <div className="imgs-inner"></div>
            <div className="imgs-inner2"></div>
          </div>
        </div>
      </div>
    </>
  );
}
