import React, { useState, useEffect } from "react";
import useAxios from "../useAxios";
import Joke from "./Joke";
import "./Jokes.css";

const Jokes = ({ url }) => {
	const [jokes, setUrl] = useAxios(url);

	useEffect(() => {
		setUrl(url);
	}, [url]);

	return (
		<div className="card-container">
			{jokes.value
				? jokes.value.map((joke, index) => {
						joke.joke = joke.joke.replace(/&quot;/g, '"');

						return <Joke joke={joke} key={index}></Joke>;
				  })
				: "Loading..."}
		</div>
	);
};

export default Jokes;
