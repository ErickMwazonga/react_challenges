import { Controls, Users } from './components';
import useIterator from './hooks/useIterator';

const URL = 'https://randomuser.me/api/';

const Main = () => {
	const { userList, currentUser, loading, next, previous } = useIterator(URL);
	const fullName: string = `${currentUser.firstName} ${currentUser.firstName}`;

	return (
		<div className="main-section">
			{loading ? (
				<p>Loading...</p>
			) : (
				<>
					<div style={{ marginBottom: '30px' }}>
						<img src={currentUser.thumbnail} alt="User" />
						<p>{fullName}</p>
					</div>

					<hr />

					<Users userList={userList} currentUser={currentUser} />
					<Controls
						previous={previous}
						next={next}
						currentUser={currentUser}
					/>
				</>
			)}
		</div>
	);
};

export default Main;
