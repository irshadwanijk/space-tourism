import "./css/crew.css";
import { useImmer } from "use-immer";
import { spaceData } from "./spacedata/data";
export default function Crew() {
  const [crew, setCrew] = useImmer(spaceData.crew[0]);
  function setButtonColor(crewName: any) {
    return crewName === crew.name ? { backgroundColor: "white" } : {};
  }

  function setCrewMember(e: any) {
    e.preventDefault();
    console.log();
  }

  function setCrewNumber(crewNum: String) {
    switch (crewNum) {
      case "Douglas Hurley":
        return "01";
      case "Mark Shuttleworth":
        return "02";
      case "Victor Glover":
        return "03";
      case "Anousheh Ansari":
        return "04";
    }
  }
  return (
    <div className="crew">
      <h4 className="meetCrewHdng" style={{ marginBottom: "6rem" }}>
        {setCrewNumber(crew.name)} MEET YOUR CREW
      </h4>
      <div className="crew-container">
        <div className="crew-container-left">
          <div className="crew-slide">
            <h3
              style={{
                color: "hsl(246, 25%, 77%)",
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: "1.5rem",
              }}
            >
              {crew.role}
            </h3>
            <h2
              style={{
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: "3rem",
              }}
            >
              {crew.name}
            </h2>
            <p style={{ marginBottom: "3rem" }}>{crew.bio}</p>
          </div>
          <div onScroll={setCrewMember}>
            <button
              className="btn-scroll"
              onClick={(e) => {
                e.preventDefault();
                setCrew(spaceData.crew[0]);
              }}
              style={setButtonColor(spaceData.crew[0].name)}
            ></button>
            <button
              className="btn-scroll"
              onClick={(e) => {
                e.preventDefault();
                setCrew(spaceData.crew[1]);
              }}
              style={setButtonColor(spaceData.crew[1].name)}
            ></button>
            <button
              className="btn-scroll"
              onClick={(e) => {
                e.preventDefault();
                setCrew(spaceData.crew[2]);
              }}
              style={setButtonColor(spaceData.crew[2].name)}
            ></button>
            <button
              className="btn-scroll"
              onClick={(e) => {
                e.preventDefault();
                setCrew(spaceData.crew[3]);
              }}
              style={setButtonColor(spaceData.crew[3].name)}
            ></button>
          </div>
        </div>
        <div className="crew-container-right">
          <div>
            <img
              className="crew-img"
              src={require(`${crew.images.png}`)}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
