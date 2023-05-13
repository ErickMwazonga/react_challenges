import React from 'react';
import { RiLoader2Line } from 'react-icons/ri'
import { User } from '../types';

interface IProps {
	currentUser: User;
	next: () => void;
	previous: () => void;
	loading: boolean
}

const Controls: React.FC<IProps> = ({ loading, next, previous, currentUser }) => {
	const isFirstUser = currentUser.index === 0;

	return (
		<div className='footer'>
			<button onClick={previous} disabled={isFirstUser}>Prev</button>
			<button onClick={next} className='next-button'>
				{loading && <RiLoader2Line className='loader'/>}
				<span>Next</span>
			</button>
		</div>
	);
};

export default Controls;
