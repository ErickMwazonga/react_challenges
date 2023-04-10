import { useEffect, useRef, useState } from 'react';
import { IUser } from './types';

const useIterator = (url: string) => {
	const [userList, setUserList] = useState<IUser[]>([]);
	const [currentUser, setCurrentUser] = useState<IUser>({} as IUser);
	const [loading, setLoading] = useState<boolean>(false);
	const dataFetchedRef = useRef(false);

	useEffect(() => {
		if (dataFetchedRef.current) return;
		dataFetchedRef.current = true;
		fetchUser();
	}, []);

	const updateUserList = (newUser: IUser) => {
		setUserList((prevList) => [...prevList, newUser]);
	};

	async function fetchUser() {
		setLoading(true);

		try {
			const response = await fetch(url);
			const data = await response.json();

			const {
				gender,
				email,
				name: { title, first, last },
				picture: { thumbnail },
			} = data.results[0];

			const user: IUser = {
				index: userList.length,
				email: email,
				gender: gender,
				title: title,
				firstName: first,
				lastName: last,
				thumbnail: thumbnail,
			};

			setCurrentUser(user);
			updateUserList(user);
		} catch (error) {
			console.log(error);
		}

		setLoading(false);
	}

	const next = () => {
		const [currIndex, listCount] = [currentUser.index, userList.length];

		if (listCount === 0 || currIndex === userList[listCount - 1].index) {
			fetchUser();
		} else {
			const newCurrentUser: IUser = userList[currIndex + 1];
			setCurrentUser(newCurrentUser);
		}
	};

	const previous = () => {
		const currIndex = currentUser.index;
		const listCount = userList.length;

		if (listCount === 0 || currIndex === 0) {
			console.log('NO PREVIOUS USER');
		} else {
			const newCurrentUser: IUser = userList[currIndex - 1];
			setCurrentUser(newCurrentUser);
		}
	};

	return { userList, currentUser, loading, next, previous };
};

export default useIterator;
