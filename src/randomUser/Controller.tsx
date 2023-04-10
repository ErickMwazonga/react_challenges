import React from 'react';

interface IProps {
	next: () => void;
	previous: () => void;
}

const Controller: React.FC<IProps> = ({ next, previous }) => (
	<div>
		<button onClick={previous}>Prev</button>
		<button onClick={next}>Next</button>
	</div>
);

export default Controller;
