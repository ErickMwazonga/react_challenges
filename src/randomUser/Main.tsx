import React from 'react';
import Controller from './Controller';
import useIterator from './useIterator';
import AllUsers from './AllUsers';

const URL = 'https://randomuser.me/api/';

const Main = () => {
	const { userList, currentUser, loading, next, previous } = useIterator(URL);
	const fullName: string = `${currentUser.firstName} ${currentUser.firstName}`;

	if (loading) {
		return <p>Loading...</p>;
	}

	return (
		<div className="main-section">
			<div style={{ marginBottom: '30px' }}>
				<p>Current User</p>
				<img src={currentUser.thumbnail} alt="User" />
				<p>{fullName}</p>
			</div>

			<hr />

			<AllUsers userList={userList} currentUser={currentUser} />
			<Controller previous={previous} next={next} />
		</div>
	);
};

export default Main;
