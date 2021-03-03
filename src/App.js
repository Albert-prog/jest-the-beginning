import React, { useState, useEffect } from "react";
import "./App.css";
import Jokes from "./components/Jokes";
import { routes } from "./data/apiRoutes";
import useAxios from "./useAxios";


function App() {
  const [categories, setCategories] = useAxios(routes.categories);
  const [url, setUrl] = useState(routes.randomJokes);

  const dropDownChangeHandler = ({ target }) => {
    setUrl(routes.categoryJokes(target.value));
  };

  const buttonClickHandler = () => {
    setUrl("");
  };

  useEffect(() => {
    url === "" && setUrl(routes.randomJokes);
  }, [url]);

  return (
    <div className="App">
      <div className="jokes-input">
        <button onClick={buttonClickHandler}>Random Jokes</button>
        Category:
        <select onChange={dropDownChangeHandler}>
          {categories.value
            ? categories.value.map((category, index) => (
                <option key={index}>{category}</option>
              ))
            : "Loading..."}
        </select>
      </div>
      <Jokes url={url} />
    </div>
  );
}

export default App;
