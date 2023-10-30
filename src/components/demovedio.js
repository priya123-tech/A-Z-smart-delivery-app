// DemoVideo of delivery Service

import React from 'react';
import ReactPlayer from 'react-player';


import './demovedio.css';


function DemoVedio() {
    return (
      <div>
        <ReactPlayer
          url="https://youtu.be/D9bwnJclcas?si=kVoZcTVtoVhgqUZY" // Replace with the URL of your video
          controls
          width="100%"
          height="auto"
        />
      </div>
    );
  }
  
  export default DemoVedio;