import React from 'react';
import './App.css';
import { default as RandomUser } from './randomUser/Main';
import { default as Dots } from './dots/Main';
import { default as Joker } from './joker/Main';

const App = () => {
	return (
		<div className="App">
			{/* <RandomUser /> */}
			{/* <Dots /> */}
			<Joker />
		</div>
	);
};

export default App;
