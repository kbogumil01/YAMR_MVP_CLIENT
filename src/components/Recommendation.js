import React from 'react';
import { Button } from '@mui/material';
import imdb from '../pics/imdb.png';


function Recommendation({ movie, onFeedback }) {
  return (
    <div>
      <h2>Recommended Movie</h2>
      <div>
        <img src={movie.src} alt={movie.title} style={{width: '25%', height: '25%',  marginBottom: '2px'}} />
      </div>
      <div>
        <p style={{ margin: '0' }}>Title: {movie.title} ({movie.year})</p>
        <p style={{ margin: '0' }}>Director: {movie.director}</p>
        <p style={{ margin: '0' }}>Studio: {movie.studio}</p>
        <div style={{ display: 'flex', justifyContent:'center', alignItems: 'center', marginTop: '2px'}}>
          <img src={imdb} alt="IMDb icon" style={{ width: '50px', height: '27px', marginRight: '12px' }} />
          <p style={{ margin: '0' }}>{movie.imdbRating}/10</p>
        </div>

      </div>
      <h3>Rate this recommendation!</h3>
      <div>
        <Button
          color="primary" 
          style={{ margin: '10px', marginTop:'2px', borderRadius: '5px', padding: '30px 45px', fontSize: '48px' }} 
          onClick={() => onFeedback('thumbs-up')}>👍
        </Button>
        <Button 
          color="primary" 
          style={{ margin: '10px', borderRadius: '5px', padding: '30px 45px', fontSize: '48px' }} 
          onClick={() => onFeedback('thumbs-down')}>👎
        </Button>
      </div>
    </div>
  );
}

export default Recommendation;
