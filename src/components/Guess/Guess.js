import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ guess, answer }) {
  const keyBase = crypto.randomUUID();
  const guessResult = checkGuess(guess, answer);

  return (
    <p className="guess">
      {range(0, 5).map((index) => (
        <span
          key={`${keyBase}_${index}`}
          className={`cell ${guessResult?.at(index)?.status}`}
        >
          {guessResult?.at(index)?.letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
