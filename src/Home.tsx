import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FcTodoList, FcBusinessman, FcRating } from "react-icons/fc";
import { SiTaichigraphics } from "react-icons/si";
import { BsFillChatLeftQuoteFill } from "react-icons/bs";
import { MdPassword, MdDarkMode } from "react-icons/md";
import { TbInputSearch } from "react-icons/tb";
import { RiNodeTree } from "react-icons/ri";
import './App.css';

const Home = () => {
	return (
		<Fragment>
			<h3>The Challenger</h3>
			<div className="home-page">
				<Link to="/todo">
					<span className='title'>Rating</span>
					<FcTodoList className='icon'/>
				</Link>
				<Link to="/random-user">
					<span className='title'>Random User</span>
					<FcBusinessman className='icon'/>
				</Link>
				<Link to="/dots">
					<span className='title'>Dots</span>
					<SiTaichigraphics className='icon'/>
				</Link>
				<Link to="/joker">
					<span className='title'>Dots</span>
					<BsFillChatLeftQuoteFill className='icon'/>
				</Link>
				<Link to="/rating">
					<span className='title'>Rating</span>
					<FcRating className='icon'/>
				</Link>
				<Link to="/password">
					<span className='title'>Password</span>
					<MdPassword className='icon'/>
				</Link>
				<Link to="/autocomplete">
					<span className='title'>Auto-Complete</span>
					<TbInputSearch className='icon'/>
				</Link>
				<Link to="/toggle-theme">
					<span className='title'>Toggle Theme</span>
					<MdDarkMode className='icon'/>
				</Link>
				<Link to="/file-structure">
					<span className='title'>File Structure</span>
					<RiNodeTree className='icon'/>
				</Link>
			</div>
		</Fragment>
	);
};

export default Home;
