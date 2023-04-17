import { useEffect, useState } from 'react';
import axios from 'axios';
import Autocomplete from './components/Autocomplete';
import { Country } from './types';
import cls from './ui.module.css';

const COUNTRY_API_URL = 'https://restcountries.com/v3.1/lang/eng';

const AutocompleteWrapper = () => {
	const [data, setData] = useState<Country[]>([]);

	useEffect(() => {
		axios.get(COUNTRY_API_URL).then((resp) => setData(resp.data));
	}, []);

	return (
		<div className={cls.mainContainer}>
			<p>English-speaking countries:</p>
			<Autocomplete data={data} />
		</div>
	);
};

export default AutocompleteWrapper;
