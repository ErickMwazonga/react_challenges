import { MouseEvent } from 'react';
import Dot from './Dot';
import { Dot as IDot } from '../types';

interface Props {
	dots: IDot[];
	currentDot?: IDot;
	draw: (e: MouseEvent<HTMLDivElement>) => void;
}

const Dots: React.FC<Props> = ({ dots, draw, currentDot }) => {
	const hasDots = dots.length > 0

	const dotsDisplay = dots.map((dot: IDot, _) => (
		<Dot dot={dot} currentDot={currentDot} />
	))

	const noDotsDisplay = <p>Click in here to draw a dot</p>

	return (
		<div id="click-area" onClick={draw}>
			{hasDots ? dotsDisplay : noDotsDisplay}
		</div>
	)
}

export default Dots;
