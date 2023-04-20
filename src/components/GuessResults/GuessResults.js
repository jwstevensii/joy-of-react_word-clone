import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Guess from '../Guess';

function GuessResults({ guesses, answer }) {
  console.log('guesses:\n', guesses);
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((index) => (
        <Guess
          key={crypto.randomUUID()}
          guess={guesses.at(index)?.word}
          answer={answer}
        />
      ))}
    </div>
  );
}

export default GuessResults;
