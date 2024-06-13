import React from 'react';

function Result({ answers }) {
  // Przykładowa logika rekomendacji na podstawie odpowiedzi użytkownika
  const getRecommendation = () => {
    const genreAnswer = answers[0];
    const moodAnswer = answers[1];
    const ratingAnswer = answers[2];

    if (genreAnswer === 'Action' && moodAnswer === 'Happy' && ratingAnswer > 3) {
      return 'We recommend you to watch "Avengers: Endgame".';
    } else if (genreAnswer === 'Comedy' && moodAnswer === 'Sad') {
      return 'We recommend you to watch "The Hangover".';
    } else if (genreAnswer === 'Drama' && ratingAnswer <= 3) {
      return 'We recommend you to watch "The Shawshank Redemption".';
    } else {
      return 'We recommend you to explore more movies on our platform!';
    }
  };

  const recommendation = getRecommendation();

  return (
    <div className="result">
      <h2>Your Recommendation</h2>
      <p>{recommendation}</p>
    </div>
  );
}

export default Result;