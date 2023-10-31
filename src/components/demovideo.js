// DemoVideo of delivery Service

import React from 'react';
import './demovideo.css';

const VideoCard = ({ videoURL }) => {
  return (
    <div className="video-card">
      <h2 className="video-card-heading">Watch this video to know about our services</h2>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src={videoURL}
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          title="Service Video"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoCard;
