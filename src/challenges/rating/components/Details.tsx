import React from 'react';
import { CiStar } from 'react-icons/ci';
import { FEEDBACK } from '../constants';

const Details = () => {
	const title: string = FEEDBACK.title;
	const description: string = FEEDBACK.description;

	return (
		<div className="details">
			<div className="logo">
				<CiStar className="icon" />
			</div>
			<h1 className="title">{title}</h1>
			<p className="description">{description}</p>
		</div>
	);
};

export default Details;
