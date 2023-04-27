import React from 'react';
import { IUser } from '../types';
import User from './User';

interface IProps {
	currentUser: IUser;
	userList: IUser[];
}

const AllUsers: React.FC<IProps> = ({ userList, currentUser }) => {
	return (
		<div>
			<span>All Users</span>
			<ul className='userItem'>
				{userList.map((user: IUser) => (
					<User user={user} currentUser={currentUser} />
				))}
			</ul>
		</div>
	);
};

export default AllUsers;
