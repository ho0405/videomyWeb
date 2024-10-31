"use client";

import React from 'react';

const Main = () => {
  const handleMouseEnter = (e: React.MouseEvent<HTMLVideoElement>) => {
    e.currentTarget.play();
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLVideoElement>) => {
    e.currentTarget.pause();
  };

  return (
    <div className="main">
      
      <video
        src="/videoBG.mp4"
        loop
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} 
      />
      <div className="overlay"></div>
      <div className="content">
        <h1>Welcome</h1>
        <p>to my site.</p>
      </div>
    </div>
  );
};

export default Main;
