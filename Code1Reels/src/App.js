import React from "react";
import "./App.css";
// import Icon from "./images/icons8-instagram.gif";
import VideoCard from "./Component/VideoCard";
import Vdo1 from "./images/Vdo1.mp4";
import Vdo2 from "./images/Vdo2.mp4";
// import Vdo from "./images/Vdo1.mp4";
function App() {
  return (
    <div className="app">
      <div className="app__top">
        <img
          src="https://media.giphy.com/media/rzMuFBKUhwlNSL5r1u/giphy.gif"
          alt=""
          className="app__logo"
        />

        <h2>Reels</h2>
      </div>
      <div className="app__videos">
        <VideoCard VdoLink={Vdo1} />
        <VideoCard VdoLink={Vdo2} />
        {/* Container of app__videos(scrolable container) */}
      </div>
    </div>
  );
}

export default App;
