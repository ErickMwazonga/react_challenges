import { useMemo } from 'react';
import { AddTodo, TodoFilter, TodoList } from './components';
import useTodos from './hooks/useTodos';
import './Main.css';

const Main = () => {
	const { todos, setTodos, ...actions } = useTodos([]);
	const { addTodo, removeTodo, completeTodo, activateTodo } = actions;

	const activeTodos = useMemo(() => {
		return todos.filter((todo) => !todo.isCompleted && !todo.isDeleted);
	}, [todos]);

	return (
		<div className="todo-container">
			<AddTodo addTodo={addTodo} />

			<TodoList
				todos={activeTodos}
				completeTodo={completeTodo}
				removeTodo={removeTodo}
			/>

			{todos.length > 0 && (
				<TodoFilter
					todos={todos}
					setTodos={setTodos}
					activateTodo={activateTodo}
				/>
			)}
		</div>
	);
};

export default Main;
