import React, { Dispatch, SetStateAction, useState } from 'react';
import Rating from './Rating';
import '../Main.scss';

interface Star {
	level: number;
}

interface Props {
	rating: number;
	setRating: Dispatch<SetStateAction<number>>;
}

const Ratings: React.FC<Props> = ({ rating, setRating }) => {
	const [hoveredLevel, setHoveredLevel] = useState(0);

	const stars: Star[] = Array.from({ length: 5 }, (_, idx) => ({
		level: idx + 1,
	}));

	const handleMouseEnter = (rating: number) => {
		setHoveredLevel(rating);
	};
	const handleMouseLeave = () => {
		setHoveredLevel(0);
	};

	return (
		<div className="rating-container">
			{stars.map(({ level }) => (
				<Rating
					key={level}
					level={level}
					rating={rating}
					setRating={setRating}
					hoveredLevel={hoveredLevel}
					handleMouseEnter={handleMouseEnter}
					handleMouseLeave={handleMouseLeave}
				/>
			))}
		</div>
	);
};

export default Ratings;
