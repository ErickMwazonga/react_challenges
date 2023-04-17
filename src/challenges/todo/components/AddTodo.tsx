import { MouseEvent, KeyboardEvent, useState } from 'react';

interface Props {
	addTodo: (text: string) => void;
}

const CreateTodo: React.FC<Props> = ({ addTodo }) => {
	const [value, setValue] = useState<string>('');

	const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		if (!value) return;

		addTodo(value);
		setValue('');
	};

	const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
		if (!value) return;

		if (e.key === 'Enter') {
			setValue('');
			addTodo(value);
		}
	};

	return (
		<div className="create-todo-container">
			<span>Add Todo</span>
			<div className="create-todo-form">
				<input
					type="text"
					className="input"
					value={value}
					onChange={(e) => setValue(e.target.value)}
					onKeyDown={(e) => handleKeyPress(e)}
					placeholder="Add new todo"
				/>

				{value && (
					<button type="submit" onClick={(e) => handleSubmit(e)}>
						&#43;
					</button>
				)}
			</div>
		</div>
	);
};

export default CreateTodo;
