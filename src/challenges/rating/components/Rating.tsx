import React, { Dispatch, SetStateAction } from 'react';
import { CiStar } from 'react-icons/ci';

interface Props {
	rating: number;
	setRating: Dispatch<SetStateAction<number>>;
	level: number;
	hoveredLevel: number;
	handleMouseEnter: (rating: number) => void;
	handleMouseLeave: () => void;
}

const Rating: React.FC<Props> = (props) => {
	const { rating, setRating, level, hoveredLevel, ...mouseProps } = props;
	const { handleMouseEnter, handleMouseLeave } = mouseProps;

	const hoveredActiveCls = level <= hoveredLevel ? 'active' : '';
	const ratingActiveCls = level <= rating ? 'active' : '';

	let activeCls = ratingActiveCls;
	if (hoveredLevel) {
		activeCls = hoveredActiveCls;
	}

	return (
		<button
			className={`star-button ${activeCls}`}
			onClick={() => setRating(level)}
			onMouseEnter={() => handleMouseEnter(level)}
			onMouseLeave={handleMouseLeave}
		>
			<CiStar className="star" />
		</button>
	);
};

export default Rating;
