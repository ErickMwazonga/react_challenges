import { Link } from 'react-router-dom';
import './App.css';

const Home = () => {
	return (
		<>
			<h3>The Challenger</h3>
			<div className="home-page">
				<Link to="/todo">Todo</Link>
				<Link to="/random-user">Random User</Link>
				<Link to="/dots">Dots</Link>
				<Link to="/joker">Joker</Link>
				<Link to="/rating">Rating</Link>
				<Link to="/password">Password</Link>
				<Link to="/autocomplete">Auto-Complete</Link>
			</div>
		</>
	);
};

export default Home;
