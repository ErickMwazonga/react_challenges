import { useState, KeyboardEvent, ChangeEvent } from 'react';
import { Country } from './types';

const useAutocomplete = (data: Country[]) => {
	const [searchedValue, setSearchedValue] = useState('');
	const [suggestions, setSuggestions] = useState<Country[]>([]);
	const [selectedSuggestion, setSelectedSuggestion] = useState('');
	const [activeSuggestion, setActiveSuggestion] = useState(0);

	const handleChange = (event: ChangeEvent<any>): void => {
		if (event.target.value) {
			const filteredSuggestions = data.filter((itemData) => {
				const value = event.target.value.toString().toUpperCase();
				const name = itemData.name.common.toUpperCase();

				return value && name.startsWith(value) && name !== value;
			});
			setSearchedValue(event.target.value);
			setSuggestions(filteredSuggestions);
		} else {
			setSearchedValue('');
			setSuggestions([]);
			setSelectedSuggestion('');
			setActiveSuggestion(0);
		}
	};

	const handleKeyChange = (event: KeyboardEvent<HTMLInputElement>): void => {
		switch (event.key) {
			case 'ArrowDown':
				if (activeSuggestion < suggestions.length) {
					setActiveSuggestion(activeSuggestion + 1);
				}
				break;
			case 'ArrowUp':
				if (activeSuggestion > 1) {
					setActiveSuggestion(activeSuggestion - 1);
				}
				break;
			case 'Enter':
				const temp = suggestions[activeSuggestion - 1];

				setSearchedValue(temp.name.common);
				setSelectedSuggestion(temp.name.common);
				setSuggestions([]);
				setActiveSuggestion(0);

				break;
			default:
				return;
		}
	};

	const handleClick = (value: string) => {
		setSearchedValue(value);
		setSuggestions([]);
		setSelectedSuggestion(value);
		setActiveSuggestion(0);
	};

	return {
		searchedValue,
		suggestions,
		selectedSuggestion,
		activeSuggestion,
		handleChange,
		handleKeyChange,
		handleClick,
	};
};

export default useAutocomplete;
