import React from 'react';
import { IUser } from './types';
import DisplayUser from './DisplayUser';
import './Main.css';

interface IProps {
	currentUser: IUser;
	userList: IUser[];
}

const AllUsers: React.FC<IProps> = ({ userList, currentUser }) => {
	return (
		<div>
			<span>All Users</span>
			<ul>
				{userList.map((user: IUser) => (
					<DisplayUser user={user} currentUser={currentUser} />
				))}
			</ul>
		</div>
	);
};

export default AllUsers;
