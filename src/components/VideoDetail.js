import React from "react";
import "./VideoItem.css";

export default function VideoDetail({ video }) {
  if (!video) {
    return (
      <div class="ui active centered inline loader"></div>
      //   <div>Loading..</div>
    );
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
}
