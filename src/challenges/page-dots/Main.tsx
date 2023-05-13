import { MouseEvent, useMemo, useReducer } from 'react';
import { Dots, Controls } from './components';
import { ActionTypes, InitialState, reducer } from './reducer';
import { Dot } from './types';
import './Main.css';

const DOTS_LIMIT = 100;

const Main = () => {
	const [state, dispatch] = useReducer(reducer, {
		currentDot: undefined,
		dots: [],
		cache: [],
	} as InitialState);

	const { currentDot, dots, cache } = state;

	const moreDotsThanLimit = useMemo(() => {
		return dots.length >= DOTS_LIMIT;
	}, [dots.length]);

	const draw = (e: MouseEvent<HTMLDivElement>) => {
		if (moreDotsThanLimit) {
			alert(`Passed the ${DOTS_LIMIT} limit`);
			return;
		}

		const { clientX, clientY } = e;
		const newDot: Dot = { x: clientX, y: clientY };

		dispatch({
			type: ActionTypes.DRAW,
			payload: { newDot },
		});
	};

	const undo = () => {
		dispatch({ type: ActionTypes.UNDO });
	};

	const redo = () => {
		dispatch({ type: ActionTypes.REDO });
	};

	const hasDots = dots.length > 0 || cache.length > 0

	return (
		<div className="dots-container">
			<Dots dots={dots} draw={draw} currentDot={currentDot} />
			{hasDots && <Controls undo={undo} redo={redo} />}
		</div>
	);
};

export default Main;
