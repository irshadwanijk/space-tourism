import React from "react";
import { useImmer } from "use-immer";
import "./App.css";
import Home from "./home";
import Destinations from "./destination";
import Crew from "./crew";
import Technology from "./technology";

const pageMap = {
  home: Home,
  dest: Destinations,
  crew: Crew,
  tech: Technology,
};

export default function App() {
  const [currPage, setCurrPage] = useImmer<keyof typeof pageMap>("home");
  const Component = pageMap[currPage];
  function setUnderLine() {
    return {
      textDecoration: "underline white",
      textDecorationThickness: "3px",
      color: "white",
      textUnderlineOffset: "20px",
    };
  }
  let imgbg;
  switch (pageMap[currPage]) {
    case Home:
      imgbg = require("./assets/home/background-home-desktop.jpg");
      document.body.style.backgroundImage = `url(${imgbg})`;
      break;
    case Destinations:
      imgbg = require("./assets/destination/background-destination-desktop.jpg");
      document.body.style.backgroundImage = `url(${imgbg})`;
      break;
    case Crew:
      imgbg = require("./assets/crew/background-crew-desktop.jpg");
      document.body.style.backgroundImage = `url(${imgbg})`;
      break;
    case Technology:
      imgbg = require("./assets/technology/background-technology-desktop.jpg");
      document.body.style.backgroundImage = `url(${imgbg})`;
      break;
    default:
      document.body.style.backgroundImage = require("./assets/home/background-home-desktop.jpg");
      break;
  }

  return (
    <div>
      <div className="navigation">
        <div className="container">
          <div>
            <button
              className="navlink"
              onClick={(e) => {
                e.preventDefault();
                setCurrPage("home");
              }}
              style={currPage === "home" ? setUnderLine() : {}}
            >
              00 Home
            </button>
          </div>
          <div>
            <button
              className="navlink "
              onClick={(e) => {
                e.preventDefault();
                setCurrPage("dest");
              }}
              style={currPage === "dest" ? setUnderLine() : {}}
            >
              01 Destination
            </button>
          </div>
          <div>
            <button
              className="navlink "
              onClick={(e) => {
                e.preventDefault();
                setCurrPage("crew");
              }}
              style={currPage === "crew" ? setUnderLine() : {}}
            >
              03 Crew
            </button>
          </div>
          <div>
            <button
              className="navlink "
              onClick={(e) => {
                e.preventDefault();
                setCurrPage("tech");
              }}
              style={currPage === "tech" ? setUnderLine() : {}}
            >
              04 Technology
            </button>
          </div>
        </div>
      </div>
      <div>
        <Component />
      </div>
    </div>
  );
}
