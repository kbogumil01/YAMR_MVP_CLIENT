import React, { useRef, useEffect } from 'react';
import { Button } from '@mui/material';

function Rating({ question, options, onAnswer, videoSrc }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(error => {
        console.error('Error attempting to play', error);
      });
    }
  }, [videoSrc]);

  const handleVideoError = () => {
    console.error('Error loading video.');
  };

  return (
    <div className="question-container">
      <h2>{question}</h2>
      <div className="video-container">
        <video 
          ref={videoRef} 
          src={videoSrc} 
          controls 
          onError={handleVideoError}
          className="video-element"
          autoPlay
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="button-container">
        {options.map((option, index) => (
          <Button 
            key={index} 
            variant="contained" 
            color="primary" 
            style={{ margin: '10px', borderRadius: '5px', padding: '30px 45px', fontSize: '32px' }}
            onClick={() => {onAnswer(option)}}
          >
            {option}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Rating;
