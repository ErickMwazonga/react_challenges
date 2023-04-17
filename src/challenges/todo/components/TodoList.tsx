import { ITodo } from '../types';
import Todo from './Todo';

interface Props {
	todos: ITodo[];
	showNoItems?: boolean;
	completeTodo?: (id: string) => void;
	removeTodo?: (id: string) => void;
	activateTodo?: (id: string) => void;
}

const NoItems = () => <div className="no-items">No items here :-)</div>;

const TodoList: React.FC<Props> = (props) => {
	const { todos, completeTodo, removeTodo, activateTodo } = props;
	const displayNoItems = props.showNoItems && !todos.length;

	return (
		<div className="todo-list">
			{displayNoItems && <NoItems />}

			{todos.map((todo, _) => (
				<Todo
					key={todo.id}
					todo={todo}
					completeTodo={completeTodo}
					removeTodo={removeTodo}
					activateTodo={activateTodo}
				/>
			))}
		</div>
	);
};

export default TodoList;
