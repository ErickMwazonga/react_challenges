import ProfileCard from './ProfileCard';
import useIterator from './hooks/useIterator';

const URL = 'https://randomuser.me/api/';

const Main = () => {
	const { currentUser, loading, next, previous } = useIterator(URL);

	return (
		<ProfileCard
			loading={loading}
			previous={previous}
			next={next}
			currentUser={currentUser}
		/>
		
	);
};

export default Main;
