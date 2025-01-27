import './Navbar.css';
import Head from './Images/Head.png';
import Penpaper from './Images/penpaper.png';
import Board from './Images/board.png';
import God from './Images/God.png';
import Ig from './Images/ig.webp';
import linkedin from './Images/linkedin.webp';
import { Link } from 'react-router-dom';
import HomeButton from './HomeButton';
import { useEffect } from 'react';

function Navbar() {

    //Useeffect dynamically changes the code
    useEffect(() => {
        //Gets view toggle and outerbox
        const viewbg = document.getElementById('viewbg');
        const outerbox = document.querySelector('.outerbox');

        //When mouse enters view background the outerbox invisible class is added
        viewbg.addEventListener('mouseenter', () => {
            outerbox.classList.add('invisible');
        });
        //When mouse leaves view background the outerbox invisible class is removed
        viewbg.addEventListener('mouseleave', () => {
            outerbox.classList.remove('invisible');
        });
    })
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

            <div id='desktop'>
                <div id='viewbg' className='item'>
                    <h6>View Background</h6>
                </div>
                <div id='social'>
                    <div className='rowbox'>
                        <a href="https://www.instagram.com/walterosborne_/" target='_blank'>
                            <img src={Ig} alt="" />
                        </a>
                        <a href="https://www.linkedin.com/in/walter-osborne/" target='_blank' >
                            <img src={linkedin} alt="" />
                        </a>
                    </div>
                </div>
            </div>

            <HomeButton />
        </>
    );
}

export default Navbar;
