import { useState } from 'react';
import { Ratings, Details, Results } from './components';
import Button from '../common/Button';
import './Main.scss';

const Main = () => {
	const [rating, setRating] = useState<number>(0);
	const [showResults, setShowResults] = useState(false);

	const submitRating = () => setShowResults(true);
	const reset = () => {
		setRating(0);
		setShowResults(false);
	};

	return (
		<div className="ratings-container">
			{!showResults ? (
				<div className="card">
					<Details />
					<Ratings rating={rating} setRating={setRating} />

					<Button
						text="Submit"
						variant="outline"
						disabled={rating === 0}
						onClick={submitRating}
					/>
				</div>
			) : (
				<Results rating={rating} reset={reset} />
			)}
		</div>
	);
};

export default Main;
