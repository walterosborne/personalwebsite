import './Navbar.css';
import Head from './Images/Head.png';
import Penpaper from './Images/penpaper.png';
import Board from './Images/board.png';
import God from './Images/God.png';
import { Link } from 'react-router-dom';
import HomeButton from './HomeButton';

function Navbar() {
    return (
        <>
            <div id='bar'>
                <Link className='link' to="/aboutme">
                    <div className='item' id='about'>
                        <img id='head' src={Head} alt="About Me"></img>
                        <h2>About Me</h2>
                    </div>
                </Link>
                <Link className='link' to="/portfolio">
                    <div className='item' id='prof'>
                        <img id='penpaper' src={Penpaper} alt="Portfolio" width='35px' />
                        <h2>Content</h2>
                    </div>
                </Link>
                <Link className='link' to="/professional">
                    <div className='item' id='prof'>
                        <img id='board' src={Board} alt="Clipboard" width='35px' />
                        <h2>Profes-sional</h2>
                    </div>
                </Link>
                <Link className='link' to="/blog">
                    <div className='item' id='prof'>
                        <img id='god' src={God} alt="God Himself" />
                        <h2>Opinion</h2>
                    </div>
                </Link>
            </div>

            <HomeButton />
        </>
    );
}

export default Navbar;
