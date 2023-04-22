import { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeProvider';
import Button from '../common/Button';
import './Main.scss';

const Main = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<div>
			<p>Current Theme {theme}</p>
			<Button onClick={toggleTheme} text={'Toggle Theme'}>
				Toggle Theme
			</Button>
		</div>
	);
};

export default Main;
