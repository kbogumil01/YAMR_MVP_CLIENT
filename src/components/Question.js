
import React, { useState } from 'react';

const Question = ({ question, options, onAnswer }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleSubmit = () => {
    onAnswer(selectedOptions);
  };

  return (
    <div>
      <h2>{question}</h2>
      {options.map((option) => (
        <div key={option}>
          <label>
            <input
              type="checkbox"
              value={option}
              checked={selectedOptions.includes(option)}
              onChange={() => handleOptionChange(option)}
            />
            {option}
          </label>
        </div>
      ))}
      <button onClick={handleSubmit}>Next</button>
    </div>
  );
};

export default Question;