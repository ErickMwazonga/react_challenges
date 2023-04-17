interface Props {
	selectedSuggestion: string;
}

const SelectedSuggestion: React.FC<Props> = ({ selectedSuggestion }) => {
	return <span>Country selected: {selectedSuggestion}</span>;
};

export default SelectedSuggestion;
