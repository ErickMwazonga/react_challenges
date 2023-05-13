import React from 'react';
import { User } from '../types';

interface IProps {
	user: User;
	currentUser: User;
}

const DisplayUser: React.FC<IProps> = ({ user, currentUser }) => {
	const isUserCurrent: boolean = user.email === currentUser.email;

	return (
		<li key={user.email} className={isUserCurrent ? 'bold' : ''}>
			<span>
				{user.name.firstName} {user.name.lastName}
			</span>
		</li>
	);
};

export default DisplayUser;
