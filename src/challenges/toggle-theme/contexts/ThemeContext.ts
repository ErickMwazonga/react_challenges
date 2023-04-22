import { createContext } from 'react';

export type Theme = 'light' | 'dark';

interface ThemeContextValues {
	theme: Theme;
	toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextValues>(
	{} as ThemeContextValues
);
