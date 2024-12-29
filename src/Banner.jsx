import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
function Banner() {
  return (
    <header id="home">
      <div className="header-content">
        <h1 className="centered BannerTitle">Fashion Redefined in Graphics!</h1>

        <div className="centered">
          <Link to="./shop">
            <button className="styled-button">Shop Now</button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Banner;
