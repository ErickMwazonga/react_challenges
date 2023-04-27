import React, { useMemo } from 'react';
import { GiPodiumWinner } from 'react-icons/gi';
import { SlClose } from 'react-icons/sl';
import Button from '../../common/Button';
import { RESULTS } from '../constants';

interface Props {
	rating: number;
	reset: () => void;
}

const Results: React.FC<Props> = ({ rating, reset }) => {
	const percentage = useMemo(() => (rating / 5) * 100, [rating]);

	return (
		<div className="results">
			<div className="card">
				<div className="close" onClick={reset}>
					<SlClose />
				</div>
				<div className="image-section">
					<GiPodiumWinner className="image" />
				</div>
				<p className="text">
					{RESULTS.title(rating, percentage)}
				</p>
				<div className="details">
					<h1>{RESULTS.thankYouTitle}</h1>
					<p>{RESULTS.thankYouDescription}</p>
				</div>
				<Button text="Reset" onClick={reset} />
			</div>
		</div>
	);
};

export default Results;
