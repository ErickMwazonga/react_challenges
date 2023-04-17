import { CSSProperties, useMemo } from 'react';
import { Dot as IDot } from '../types';

interface Props {
	dot: IDot;
	currentDot?: IDot;
}
const Dot: React.FC<Props> = ({ dot: { x, y }, currentDot }) => {
	const styles: CSSProperties = {
		left: x,
		top: y,
	};

	const isDotCurrent = useMemo(() => {
		if (!currentDot) return false;
		return x === currentDot.x && y === currentDot.y;
	}, [currentDot, x, y]);

	return (
		<div
			key={`dot-${x}-${y}`}
			style={styles}
			className={`dot ${isDotCurrent ? 'active' : ''}`}
		/>
	);
};

export default Dot;
