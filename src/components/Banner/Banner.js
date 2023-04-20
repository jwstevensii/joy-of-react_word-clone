import React from 'react';

function Banner({ children, success }) {
  return (
    <div className={`banner ${success ? 'happy' : 'sad'}`}>
      <p>{children}</p>
    </div>
  );
}

export default Banner;
