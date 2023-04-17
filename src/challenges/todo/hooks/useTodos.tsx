import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ITodo } from '../types';

const useTodos = (items: ITodo[]) => {
	const [todos, setTodos] = useState<ITodo[]>(items);

	const buildTodo = (text: string): ITodo => {
		return {
			id: uuidv4(),
			text: text,
			isCompleted: false,
			isDeleted: false,
		} as ITodo;
	};

	const addTodo = (text: string) => {
		const newTodo = buildTodo(text);
		setTodos((prevTodos) => [...prevTodos, newTodo]);
	};

	const completeTodo = (id: string) => {
		const updatedTodos = todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, isCompleted: true };
			}
			return todo;
		});
		setTodos(updatedTodos);
	};

	const activateTodo = (id: string) => {
		const updatedTodos = todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, isCompleted: false, isDeleted: false };
			}
			return todo;
		});
		setTodos(updatedTodos);
	};

	const removeTodo = (id: string) => {
		const updatedTodos = todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, isCompleted: false, isDeleted: true };
			}
			return todo;
		});
		setTodos(updatedTodos);
	};

	return { todos, setTodos, addTodo, removeTodo, completeTodo, activateTodo };
};

export default useTodos;
