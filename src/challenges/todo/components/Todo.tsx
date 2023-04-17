import { CSSProperties } from 'react';
import { IoCheckmarkSharp, IoClose, IoReloadOutline } from 'react-icons/io5';
import { ITodo } from '../types';

interface Props {
	todo: ITodo;
	completeTodo?: (id: string) => void;
	removeTodo?: (id: string) => void;
	activateTodo?: (id: string) => void;
}

const Todo: React.FC<Props> = (props) => {
	const { todo, completeTodo, removeTodo, activateTodo } = props;
	const isTodoActive = todo.isCompleted || todo.isDeleted;

	const styles: CSSProperties = {
		textDecoration: isTodoActive ? 'line-through' : '',
	};

	const showControls = completeTodo && removeTodo;

	return (
		<div className="todo">
			<span style={styles}>{todo.text}</span>
			<div className="button-controls">
				{showControls && (
					<>
						<span className="create">
							<IoCheckmarkSharp
								onClick={() => completeTodo(todo.id)}
							/>
						</span>

						<span className="cancel">
							<IoClose onClick={() => removeTodo(todo.id)} />
						</span>
					</>
				)}

				{activateTodo && (
					<span className="activate">
						<IoReloadOutline
							onClick={() => activateTodo(todo.id)}
						/>
					</span>
				)}
			</div>
		</div>
	);
};

export default Todo;
