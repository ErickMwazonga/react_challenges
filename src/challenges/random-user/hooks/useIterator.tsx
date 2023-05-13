import { useEffect, useRef, useState } from 'react';
import { Name, User, Location } from '../types';

const useIterator = (url: string) => {
	const [userList, setUserList] = useState<User[]>([]);
	const [currentUser, setCurrentUser] = useState<User>({} as User);
	const [loading, setLoading] = useState<boolean>(false);
	const dataFetchedRef = useRef(false);

	useEffect(() => {
		if (dataFetchedRef.current) return;
		dataFetchedRef.current = true;
		fetchUser();
	}, []);

	const updateUserList = (newUser: User) => {
		setUserList((prevList) => [...prevList, newUser]);
	};

	const buildName = ({ title, first, last}: any): Name => {
		return {
			title,
			firstName: first,
			lastName: last,
		} as Name
	}

	const buildLocation = ({ country, state, city}: any): Location => {
		return {
			country,
			state,
			city
		} as Location
	}

	async function fetchUser() {
		setLoading(true);

		try {
			const response = await fetch(url);
			const data = await response.json();

			const {
				gender,
				email,
				name,
				location,
				phone,
				login: { username },
				picture: { thumbnail: picture },
				dob: { age, date: dateOfBirth }
			} = data.results[0];

			const user: User = {
				index: userList.length,
				username,
				name: buildName(name),
				location: buildLocation(location),
				email,
				gender,
				phone,
				picture,
				age,
				dob: dateOfBirth
			};

			console.log(user, 'USER')

			setCurrentUser(user);
			updateUserList(user);
		} catch (error) {
			console.log(error, 'ERRORS');
		}

		setLoading(false);
	}

	const next = () => {
		const [currIndex, listCount] = [currentUser.index, userList.length];

		if (listCount === 0 || currIndex === userList[listCount - 1].index) {
			fetchUser();
		} else {
			const newCurrentUser: User = userList[currIndex + 1];
			setCurrentUser(newCurrentUser);
		}
	};

	const previous = () => {
		const currIndex = currentUser.index;
		const listCount = userList.length;

		if (listCount === 0 || currIndex === 0) {
			return;
		}

		const newCurrentUser: User = userList[currIndex - 1];
		setCurrentUser(newCurrentUser);
	};

	return { userList, currentUser, loading, next, previous };
};

export default useIterator;
