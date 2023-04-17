import { v4 as uuidv4 } from 'uuid';
import { ITodo } from './types';

const _todos: ITodo[] = [
	{
		id: uuidv4(),
		text: 'Erick',
		isCompleted: false,
		isDeleted: false,
	},
	{
		id: uuidv4(),
		text: 'Dama',
		isCompleted: false,
		isDeleted: false,
	},
];

export { _todos };
