import { Routes, Route } from 'react-router-dom';
import {
	AutoComplete,
	Dots,
	Joker,
	PasswordMeter,
	RandomUser,
	Todos,
	Rating,
} from './challenges';
import Home from './Home';
import './App.css';

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
	];
	return (
		<div className="App">
			<Routes>
				{routes.map(({ path, component }) => (
					<Route path={path} element={component} key={path} />
				))}
			</Routes>
		</div>
	);
};

export default App;
