import { useImmer } from "use-immer";
import "./css/technology.css";
import { spaceData } from "./spacedata/data";

export default function Technology() {
  const [tech, setTech] = useImmer(spaceData.technology[0]);
  function setButtonStyle(name: String) {
    name = name.toLocaleLowerCase();
    if (name === tech.name.toLocaleLowerCase()) {
      return { backgroundColor: "white", color: "black" };
    }
  }
  function setVehCounter(name: String) {
    switch (name) {
      case "launch vehicle":
        return "03";
      case "spaceport":
        return "02";
      case "space capsule":
        return "01";
    }
  }
  return (
    <div className="technology">
      <h3
        style={{
          fontStretch: "ultra-expanded",
          fontSize: "1.4rem",
        }}
      >
        <span style={{ color: "hsl(246, 25%, 77%)" }}>
          {setVehCounter(tech.name.toLocaleLowerCase())}
        </span>{" "}
        SPACE LAUNCH 101
      </h3>
      <div className="tech-container">
        {/* Left Grid start */}
        <div>
          {/* <h3 style={{ fontStretch: "ultra-expanded", fontSize: "1.4rem" }}>
            <span style={{ color: "hsl(246, 25%, 77%)" }}>
              {setVehCounter(tech.name.toLocaleLowerCase())}
            </span>{" "}
            SPACE LAUNCH 101
          </h3> */}
          <div className="tech-container-left">
            <div className="sub-left-btns">
              <button
                className="launch-btn"
                onClick={(e) => {
                  e.preventDefault();
                  setTech(spaceData.technology[0]);
                }}
                style={setButtonStyle("Launch vehicle")}
              >
                1
              </button>
              <button
                className="launch-btn"
                onClick={(e) => {
                  e.preventDefault();
                  setTech(spaceData.technology[1]);
                }}
                style={setButtonStyle("spaceport")}
              >
                2
              </button>
              <button
                className="launch-btn"
                onClick={(e) => {
                  e.preventDefault();
                  setTech(spaceData.technology[2]);
                }}
                style={setButtonStyle("space capsule")}
              >
                3
              </button>
            </div>
            <div className="sub-left-right">
              <h6 style={{ color: "hsl(246, 25%, 77%)" }}>THE TECHNOLOGY</h6>
              <h2
                style={{
                  fontFamily: "'Times New Roman', Times, serif",
                  fontSize: "3rem",
                }}
              >
                {tech.name}
              </h2>
              <p style={{ fontFamily: "" }}>{tech.description}</p>
            </div>
          </div>
        </div>
        {/* left Grid end */}
        <div className="tech-container-right">
          <div>
            <img
              className="space-img-vehicle"
              src={require(`${tech.images.portrait}`)}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
