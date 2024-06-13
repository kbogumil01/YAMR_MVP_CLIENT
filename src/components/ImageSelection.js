import React from 'react';

function ImageSelection({ question, images, onAnswer }) {
  return (
    <div className="image-selection">
      <p>{question}</p>
      <div className="images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            onClick={() => onAnswer(image.alt)}
            style={{ cursor: 'pointer', margin: '10px' }}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSelection;