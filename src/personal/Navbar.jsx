import './Navbar.css';
import Head from './Head.png';
import Board from './board.png';
import Home from './Home.png';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <div id='bar'>
                <Link className='link' to="/">
                    <div className='item' id='homebtn'>
                        <img id='home' className='picture' src={Home} alt="Home"></img>
                        <h2>Home</h2>
                    </div>
                </Link>
                <Link className='link' to="/aboutme">
                    <div className='item' id='about'>
                        <img id='head' className='picture' src={Head} alt="About Me"></img>
                        <h2>About Me</h2>
                    </div>
                </Link>
                <Link className='link' to="/professional">
                    <div className='item' id='prof'>
                        <img id='board' className='picture' src={Board} alt="Professional" width='35px' />
                        <h2>Profess-<br />ional</h2>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default Navbar;
