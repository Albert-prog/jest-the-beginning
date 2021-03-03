import React, { useState, useEffect } from "react";
import "./Joke.css";

const Joke = ({ joke }) => {
  const [currentJoke, setCurrentJoke] = useState(joke);

  useEffect(() => {
    setCurrentJoke(joke);
  }, [joke]);

  return (
    <div className="joke-card">
      <span className="joke-id">{currentJoke.id}</span>
      <span className="joke-joke">{currentJoke.joke}</span>
    </div>
  );
};

export default Joke;
