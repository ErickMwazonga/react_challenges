import useDadJokes from './useDadJokes';
import './Main.css';
import React from 'react';

interface ErrorProps {
	error: string | null;
}

const Loading = () => <p>Loading joke...</p>;
const Error: React.FC<ErrorProps> = ({ error }) => <p>{error}</p>;

const DadJoke = (): JSX.Element => {
	const { joke, isLoading, error, refetchJoke } = useDadJokes();

	return (
		<div className="dad-joke-container">
			{isLoading ? (
				<Loading />
			) : error ? (
				<Error error={error} />
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
