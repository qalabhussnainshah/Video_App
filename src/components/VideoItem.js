import React from "react";
import "./VideoItem.css";

export default function VideoItem({ video, onVideoSelect }) {
  console.log(video);
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.default.url}
        alt="Not Found"
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
        {/* <div className="description">{video.snippet.description}</div> */}
      </div>
    </div>
  );
}
