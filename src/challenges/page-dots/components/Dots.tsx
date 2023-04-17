import { MouseEvent } from 'react';
import Dot from './Dot';
import { Dot as IDot } from '../types';

interface Props {
	dots: IDot[];
	currentDot?: IDot;
	draw: (e: MouseEvent<HTMLDivElement>) => void;
}

const Dots: React.FC<Props> = ({ dots, draw, currentDot }) => (
	<div id="click-area" onClick={draw}>
		{dots.map((dot: IDot, _) => (
			<Dot dot={dot} currentDot={currentDot} />
		))}
	</div>
);

export default Dots;
