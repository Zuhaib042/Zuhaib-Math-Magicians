import React from 'react';
import Header from '../components/Header';

const Quote = () => (
  <div>
    <Header />
    <div className="text-white mt-24 mx-auto max-w-lg">
      <p className="text-2xl prose-blockquote">
        Mathematics are the result of mysterious powers which no one
        understands, and which the unconscious recognition of beauty must play
        an important part. Out of an infinity of designs a mathematician chooses
        one pattern for beauty’s sake and pulls it down to earth.
      </p>
      <cite className="font-light">
        -- Marston Morse
        <br />
        <em>American mathematician</em>
        <br />
      </cite>
    </div>
  </div>
);

export default Quote;
