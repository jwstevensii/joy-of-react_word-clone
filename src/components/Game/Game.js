import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessList from '../GuessList';
import GuessResults from '../GuessResults/GuessResults';
import Banner from '../Banner/Banner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const addGuess = (guess) => {
    setGuesses([...guesses, { id: crypto.randomUUID(), word: guess }]);
  };

  const isSuccess = guesses.some((guess) => guess.word === answer);
  console.log(`Is Success: ${isSuccess}`, guesses);

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      {/* <GuessList guesses={guesses} /> */}
      <GuessInput addGuess={addGuess} />
      {(guesses.length === NUM_OF_GUESSES_ALLOWED || isSuccess) && (
        <Banner success={isSuccess}>
          {isSuccess ? (
            <>
              <strong>Congratulations!</strong> Got it in{' '}
              <strong>{guesses.length} guesses</strong>.
            </>
          ) : (
            <>
              Sorry, the correct answer is <strong>{answer}</strong>.
            </>
          )}
        </Banner>
      )}
    </>
  );
}

export default Game;
