import { Dot } from './types';

export interface InitialState {
	currentDot?: Dot;
	dots: Dot[];
	cache: Dot[];
}

export enum ActionTypes {
	DRAW,
	UNDO,
	REDO,
}

type Action =
	| { type: ActionTypes.DRAW; payload: { newDot: Dot } }
	| { type: ActionTypes.UNDO | ActionTypes.REDO };

const reducer = (state: InitialState, action: Action) => {
	switch (action.type) {
		case ActionTypes.DRAW:
			return {
				...state,
				currentDot: action.payload.newDot,
				dots: [...state.dots, action.payload.newDot],
			};
		case ActionTypes.UNDO:
			if (state.dots.length === 0) return state;

			const newDots = [...state.dots];
			const lastDot = newDots.pop() as Dot;
			const remainingLastDot = newDots.at(-1) as Dot;

			return {
				...state,
				currentDot: remainingLastDot,
				dots: [...newDots],
				cache: [...state.cache, lastDot],
			};
		case ActionTypes.REDO:
			if (state.cache.length === 0) return state;

			const newCache = [...state.cache];
			const lastCacheDot = newCache.pop() as Dot;

			return {
				...state,
				currentDot: lastCacheDot,
				dots: [...state.dots, lastCacheDot],
				cache: [...newCache],
			};
		default:
			return state;
	}
};

export { reducer };
