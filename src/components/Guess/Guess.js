import React from 'react';
import { range } from '../../utils';

function Guess({ word }) {
  const keyBase = crypto.randomUUID();

  return (
    <p className="guess">
      {range(0, 5).map((index) => (
        <span key={`${keyBase}_${index}`} className="cell">
          {word?.charAt(index)}
        </span>
      ))}
    </p>
  );
}

export default Guess;
