import "./css/destination.css";
import { spaceData } from "./spacedata/data";
import { useImmer } from "use-immer";

// Main destination component
export default function Destinations() {
  const [destination, setDestination] = useImmer(spaceData.destinations[0]);
  function getDesNumber(des: String) {
    switch (des) {
      case "Moon":
        return "00";
      case "Mars":
        return "01";
      case "Europa":
        return "03";
      case "Titan":
        return "04";
    }
  }

  function setUnderLine() {
    return {
      textDecoration: "underline white",
      color: "white",
      textUnderlineOffset: "10px",
    };
  }
  return (
    <div className="destination">
      <div className="dest-container">
        {/* Destination container left */}
        <div className="dest-container-left">
          <div>
            <h4 className="pick-des-text" style={{ textAlign: "center" }}>
              {" "}
              <span
                style={{
                  color: "hsl(246, 25%, 77%)",
                  marginRight: "1px",
                  marginBottom: "3rem",
                }}
              >
                {}
              </span>{" "}
              {getDesNumber(destination.name)} PICK YOUR DESTINATION
            </h4>
            <img
              className="mars-img"
              src={require(`${destination.images.png}`)}
              alt="planet img"
            />
          </div>
        </div>
        {/* Destination container right */}
        <div className="dest-container-right">
          <div className="subnav-container">
            <div>
              <button
                className="buttons"
                onClick={(e) => {
                  e.preventDefault();
                  setDestination(spaceData.destinations[0]);
                }}
                style={destination.name === "Moon" ? setUnderLine() : {}}
              >
                MOON
              </button>
            </div>
            <div>
              <button
                className="buttons"
                onClick={(e) => {
                  e.preventDefault();
                  setDestination(spaceData.destinations[1]);
                }}
                style={destination.name === "Mars" ? setUnderLine() : {}}
              >
                MARS
              </button>
            </div>
            <div>
              <button
                className="buttons"
                onClick={(e) => {
                  e.preventDefault();
                  setDestination(spaceData.destinations[2]);
                }}
                style={destination.name === "Europa" ? setUnderLine() : {}}
              >
                EUROPA
              </button>
            </div>
            <div>
              <button
                className="buttons"
                onClick={(e) => {
                  e.preventDefault();
                  setDestination(spaceData.destinations[3]);
                }}
                style={destination.name === "Titan" ? setUnderLine() : {}}
              >
                TITAN
              </button>
            </div>
          </div>
          <div>
            <Destination desData={destination} />
          </div>
        </div>
      </div>
    </div>
  );
}

// sub component of Destination component
function Destination(props: any) {
  const desData = props.desData;
  return (
    <div>
      <h1 id="destName">{desData.name}</h1>
      <p id="desDescription">{desData.description}</p>
      <hr />
      <div className="travel-details">
        <div>
          <span>AVG DISTANCE</span>{" "}
        </div>
        <div>
          <span>EST. TRAVEL TIME</span>
        </div>
        <div>
          <span>{desData.distance}</span>{" "}
        </div>
        <div>
          <span>{desData.travel}</span>
        </div>
      </div>
    </div>
  );
}
