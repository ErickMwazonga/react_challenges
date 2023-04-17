import { useState, useEffect } from 'react';

interface DadJoke {
	id: string;
	joke: string;
	status: number;
}

interface DadJokes {
	joke: string;
	isLoading: boolean;
	error: string | null;
	refetchJoke: () => void;
}

const URL: Readonly<string> = 'https://icanhazdadjoke.com/';

const useDadJokes = (): DadJokes => {
	const [joke, setJoke] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const fetchJoke = async () => {
		setIsLoading(true);
		setError(null);

		try {
			const headers = { Accept: 'application/json' };
			const response = await fetch(URL, { headers });
			const data: DadJoke = await response.json();
			setJoke(data.joke);
		} catch (error) {
			setError('Failed to fetch joke. Please try again later.');
		}

		setIsLoading(false);
	};

	useEffect(() => {
		fetchJoke();
	}, []);

	return { joke, isLoading, error, refetchJoke: fetchJoke };
};

export default useDadJokes;
