import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Home = () => {
	return (
		<Fragment>
			<h3>The Challenger</h3>
			<div className="home-page">
				<Link to="/todo">Todo</Link>
				<Link to="/random-user">Random User</Link>
				<Link to="/dots">Dots</Link>
				<Link to="/joker">Joker</Link>
				<Link to="/rating">Rating</Link>
				<Link to="/password">Password</Link>
				<Link to="/autocomplete">Auto-Complete</Link>
				<Link to="/toggle-theme">Toggle Theme</Link>
				<Link to="/file-structure">File Structure</Link>
			</div>
		</Fragment>
	);
};

export default Home;
