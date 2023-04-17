import { useEffect, useRef } from 'react';
import { Country } from '../types';
import useAutocomplete from '../useAutocomplete';
import cls from '../ui.module.css';
import SelectedSuggestion from './SelectedSuggestion';

interface Props {
	data: Country[];
}

const Autocomplete = ({ data }: Props) => {
	const inputSearchRef = useRef<HTMLInputElement | null>(null);

	useEffect(() => {
		if (inputSearchRef.current) {
			inputSearchRef.current.focus();
		}
	}, []);

	const {
		searchedValue,
		suggestions,
		selectedSuggestion,
		activeSuggestion,
		handleChange,
		handleKeyChange,
		handleClick,
	} = useAutocomplete(data);

	const nothingToShow = !suggestions.length && searchedValue.length;

	return (
		<div className={cls.autocomplete}>
			<input
				className={cls.inputField}
				value={searchedValue}
				onChange={handleChange}
				onKeyDown={handleKeyChange}
				ref={inputSearchRef}
				color="secondary"
			/>

			{nothingToShow ? (
				<p>Nothing to show :</p>
			) : (
				<ul className={cls.suggestions}>
					{suggestions.map(({ name, flags }: Country, index) => {
						const isActive = index === activeSuggestion - 1;
						const activeCls = isActive ? cls.activeItem : '';

						return (
							<li
								key={index}
								className={`${cls.suggestionItem} ${activeCls}`}
								onClick={() => handleClick(name.common)}
							>
								<img
									className={cls.img}
									src={flags.svg}
									alt={flags.png}
								/>
								<span>{name.common}</span>
							</li>
						);
					})}
				</ul>
			)}

			{selectedSuggestion && (
				<SelectedSuggestion selectedSuggestion={selectedSuggestion} />
			)}
		</div>
	);
};

export default Autocomplete;
