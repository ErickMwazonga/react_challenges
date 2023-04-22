import { useEffect, useState } from 'react';
import { Theme, ThemeContext } from './ThemeContext';

interface Props {
	children: React.ReactNode;
}

const ThemeProvider: React.FC<Props> = ({ children }) => {
	const [theme, setTheme] = useState<Theme>('light');

	useEffect(() => {
		document.body.className = theme;
	}, [theme]);

	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export { ThemeContext, ThemeProvider };
