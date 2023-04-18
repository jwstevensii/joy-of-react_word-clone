import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    console.log({ guess });
  };

  const onChange = (event) => {
    setGuess(event.target.value.toUpperCase());
  };

  return (
    <form className="guess-input-wrapper" onSubmit={onSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        minLength={5}
        maxLength={5}
        pattern="[A-Za-z]{5}"
        value={guess}
        onChange={onChange}
      />
    </form>
  );
}

export default GuessInput;
