import React from 'react';
import { IUser } from '../types';
import Button from '../../common/Button';
import '../Main.css';

interface IProps {
	currentUser: IUser;
	next: () => void;
	previous: () => void;
}

const Controls: React.FC<IProps> = ({ next, previous, currentUser }) => {
	const isFirstUser = currentUser.index === 0;

	return (
		<div className="controls">
			<Button text="Prev" onClick={previous} disabled={isFirstUser} />
			<Button text="Next" onClick={next} />
		</div>
	);
};
export default Controls;
