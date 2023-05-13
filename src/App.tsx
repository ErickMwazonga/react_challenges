import { Routes, Route } from 'react-router-dom';
import {
	AutoComplete,
	Dots,
	Joker,
	PasswordMeter,
	RandomUser,
	Todos,
	Rating,
	ToggleTheme,
	NotFound,
	FileStructure,
	Calculator,
} from './challenges';
import Home from './Home';
import './App.scss';

interface IRoute {
	path: string;
	component: JSX.Element;
}

const App = () => {
	const routes: IRoute[] = [
		{ path: '/', component: <Home /> },
		{ path: '/todo', component: <Todos /> },
		{ path: '/random-user', component: <RandomUser /> },
		{ path: '/dots', component: <Dots /> },
		{ path: '/rating', component: <Rating /> },
		{ path: '/joker', component: <Joker /> },
		{ path: '/password', component: <PasswordMeter /> },
		{ path: '/autocomplete', component: <AutoComplete /> },
		{ path: '/toggle-theme', component: <ToggleTheme /> },
		{ path: '/file-structure', component: <FileStructure /> },
		{ path: '/calculator', component: <Calculator /> },
	];
	return (
		<div className="App">
			<Routes>
				{routes.map(({ path, component }) => (
					<Route path={path} element={component} key={path} />
				))}
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
};

export default App;
