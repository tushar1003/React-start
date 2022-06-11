import React, { useState, useRef } from "react";
import "./VideoCard.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
// import Vdo from "../images/Vdo2.mp4";
function VideoCard(props) {
  // useRef Hook
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);
  const onVideoPress = () => {
    if (isVideoPlaying) {
      //   stop
      videoRef.current.pause();
      setIsVideoPlaying(false);
      //   document.getElementsByClassName("Arrow").style.display = "none";
    } else {
      // play
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };
  return (
    <div className="videoCard">
      {/* <video loop autoPlay src={Vdo}></video> */}
      <PlayArrowIcon
        className={`${isVideoPlaying ? "dont-show" : "show"}`}
        fontSize="larger"
      />

      <video
        ref={videoRef}
        onClick={onVideoPress}
        src={props.VdoLink}
        className="videoCard__player"
        loop
      ></video>
    </div>
  );
}

export default VideoCard;
