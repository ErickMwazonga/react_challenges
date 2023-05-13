import { Link } from 'react-router-dom';
import { FcTodoList, FcBusinessman, FcRating, FcCalculator } from "react-icons/fc";
import { SiTaichigraphics } from "react-icons/si";
import { BsFillChatLeftQuoteFill } from "react-icons/bs";
import { MdPassword, MdDarkMode } from "react-icons/md";
import { TbInputSearch } from "react-icons/tb";
import { RiNodeTree } from "react-icons/ri";
import './App.scss';

const Home = () => {
	return (
		<span className='home-page'>
			<span className='header-title'>the Challenger</span>
			<div className="components">
				<Link to="/todo" className='link'>
					<span className='title'>Todo</span>
					<FcTodoList className='icon'/>
				</Link>
				<Link to="/random-user" className='link'>
					<span className='title'>Random User</span>
					<FcBusinessman className='icon'/>
				</Link>
				<Link to="/dots" className='link'>
					<span className='title'>Dots</span>
					<SiTaichigraphics className='icon'/>
				</Link>
				<Link to="/joker" className='link'>
					<span className='title'>Random Jokes</span>
					<BsFillChatLeftQuoteFill className='icon'/>
				</Link>
				<Link to="/rating" className='link'>
					<span className='title'>Rating</span>
					<FcRating className='icon'/>
				</Link>
				<Link to="/password" className='link'>
					<span className='title'>Password</span>
					<MdPassword className='icon'/>
				</Link>
				<Link to="/autocomplete" className='link'>
					<span className='title'>Auto-Complete</span>
					<TbInputSearch className='icon'/>
				</Link>
				<Link to="/toggle-theme" className='link'>
					<span className='title'>Toggle Theme</span>
					<MdDarkMode className='icon'/>
				</Link>
				<Link to="/file-structure" className='link'>
					<span className='title'>File Structure</span>
					<RiNodeTree className='icon'/>
				</Link>
				<Link to="/calculator" className='link'>
					<span className='title'>Calculator</span>
					<FcCalculator className='icon'/>
				</Link>
			</div>
		</span>
	);
};

export default Home;
