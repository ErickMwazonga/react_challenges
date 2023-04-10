import React from 'react';
import { IUser } from './types';

interface IProps {
	user: IUser;
	currentUser: IUser;
}

const DisplayUser: React.FC<IProps> = ({ user, currentUser }) => {
	const isUserCurrent: boolean = user.email === currentUser.email;

	return (
		<li key={user.email} className={isUserCurrent ? 'bold' : ''}>
			<span>
				{user.firstName} {user.lastName}
			</span>
		</li>
	);
};

export default DisplayUser;
