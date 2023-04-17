import React from 'react';

interface Props {
	undo: () => void;
	redo: () => void;
}

const Controls: React.FC<Props> = ({ undo, redo }) => {
	return (
		<div id="button-wrapper">
			<button onClick={undo}>Undo</button>
			<button onClick={redo}>Redo</button>
		</div>
	);
};

export default Controls;
