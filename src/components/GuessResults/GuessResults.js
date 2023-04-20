import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Guess from '../Guess';

function GuessResults({ guesses }) {
  console.log('guesses:\n', guesses);
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((index) => (
        <Guess key={crypto.randomUUID()} word={guesses.at(index)?.word} />
      ))}
    </div>
  );
}

export default GuessResults;
