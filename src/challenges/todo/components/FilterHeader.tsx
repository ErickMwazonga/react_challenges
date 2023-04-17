import { Category, ITodo } from '../types';

const categories: Category[] = [
	{ name: 'All', value: 'all' },
	{ name: 'Active', value: 'active' },
	{ name: 'Completed', value: 'completed' },
	{ name: 'Deleted', value: 'deleted' },
];

interface Props {
	category: string;
	setCategory: (value: string) => void;
	filterTodosByCategory: (category: string) => ITodo[];
}

const FilterHeader: React.FC<Props> = (props) => {
	const { category, setCategory, filterTodosByCategory } = props;

	const categoryActiveCls = (currentCategory: string): string => {
		return currentCategory === category ? 'active' : '';
	};

	return (
		<div className="todo-filter">
			{categories.map(({ name, value }) => (
				<p
					key={value}
					className={categoryActiveCls(value)}
					onClick={() => setCategory(value)}
				>
					{name} ({filterTodosByCategory(value).length})
				</p>
			))}
		</div>
	);
};

export default FilterHeader;
