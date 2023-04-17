import {
	Dispatch,
	SetStateAction,
	useCallback,
	useMemo,
	useState,
} from 'react';
import { ITodo } from '../types';
import TodoList from './TodoList';
import FilterHeader from './FilterHeader';
import Button from '../../common/Button';

interface Props {
	todos: ITodo[];
	activateTodo: (id: string) => void;
	setTodos: Dispatch<SetStateAction<[] | ITodo[]>>;
}

const TodoFilter: React.FC<Props> = ({ todos, setTodos, activateTodo }) => {
	const [category, setCategory] = useState<string>('all');

	const isCategoryInActive = ['completed', 'deleted'].includes(category);
	const isTodoActive = (todo: ITodo) => !todo.isCompleted && !todo.isDeleted;

	const filterTodosByCategory = useCallback(
		(category: string): ITodo[] => {
			switch (category) {
				case 'active':
					return todos.filter((todo) => isTodoActive(todo));
				case 'completed':
					return todos.filter((todo) => todo.isCompleted);
				case 'deleted':
					return todos.filter((todo) => todo.isDeleted);
				default:
					return todos;
			}
		},
		[todos]
	);

	const filteredTodos = useMemo(() => {
		return filterTodosByCategory(category);
	}, [category, filterTodosByCategory]);

	const clearCompletedTodos = () => {
		const incompleteTodos = todos.filter((todo) => !todo.isCompleted);
		setTodos(incompleteTodos);
	};

	const completedTodos = useMemo(() => {
		return todos.filter((todo) => todo.isCompleted);
	}, [todos]);

	return (
		<div className="filter-todo-container">
			<FilterHeader
				category={category}
				setCategory={setCategory}
				filterTodosByCategory={filterTodosByCategory}
			/>

			<TodoList
				todos={filteredTodos}
				showNoItems={true}
				activateTodo={isCategoryInActive ? activateTodo : undefined}
			/>

			{completedTodos.length > 0 && (
				<Button
					text="Clear Completed"
					onClick={clearCompletedTodos}
					style={{ marginTop: '20px' }}
				/>
			)}
		</div>
	);
};

export default TodoFilter;
