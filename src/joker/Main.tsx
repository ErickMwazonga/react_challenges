import useDadJokes from './useDadJokes';

import './Main.css';

const DadJoke = (): JSX.Element => {
	const { joke, isLoading, error, refetchJoke } = useDadJokes();

	return (
		<div className="dad-joke-container">
			{isLoading ? (
				<p>Loading joke...</p>
			) : error ? (
				<p>{error}</p>
			) : (
				<div className="dad-joke-content">
					<p className="dad-joke">{joke}</p>
					<button className="new-joke-button" onClick={refetchJoke}>
						New joke
					</button>
				</div>
			)}
		</div>
	);
};

export default DadJoke;
