import { url } from "inspector";
import "./css/home.css";
export default function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <div className="home-container-left">
          <h3>So, you want to travel to</h3>

          <h1>Space</h1>
          <h6>
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience! Explore
          </h6>
        </div>
        <div className="home-container-right">Explore</div>
      </div>
    </div>
  );
}
