import './Navbar.css';
import { Link } from 'react-router-dom';
import HomeButton from './HomeButton';
import { useEffect } from 'react';

function Navbar() {

    //Useeffect dynamically changes the code
    useEffect(() => {
        //Gets view toggle and outerbox
        const viewbg = document.getElementById('viewbg');
        const outerbox = document.querySelector('.outerbox');
        const scrollable = document.querySelector('.scrollable');

        //When mouse enters view background the outerbox invisible class is added
        viewbg.addEventListener('mouseenter', () => {
            if (outerbox) {
                outerbox.classList.add('invisible');
            }
            if (scrollable) {
                scrollable.classList.add('invisible');
            }
        });
        //When mouse leaves view background the outerbox invisible class is removed
        viewbg.addEventListener('mouseleave', () => {
            if (outerbox) {
                outerbox.classList.remove('invisible');
            } if (scrollable) {
                scrollable.classList.remove('invisible');
            }
        });
    })
    return (
        <>
            <div id='bar'>
                <Link className='link' to="/aboutme">
                    <div className='item' id='about'>
                        <img id='head' src='/Images/Head.png' alt="About Me"></img>
                        <h2>About Me</h2>
                    </div>
                </Link>
                <Link className='link' to="/portfolio">
                    <div className='item' id='prof'>
                        <img id='penpaper' src='/Images/penpaper.png' alt="Portfolio" width='35px' />
                        <h2>Content</h2>
                    </div>
                </Link>
                <Link className='link' to="/professional">
                    <div className='item' id='prof'>
                        <img id='board' src='/Images/board.png' alt="Clipboard" width='35px' />
                        <h2>Profes-sional</h2>
                    </div>
                </Link>
                <Link className='link' to="/blog">
                    <div className='item' id='prof'>
                        <img id='god' src='/Images/God.png' alt="God Himself" />
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
                            <img src='/Images/ig.webp' alt="" />
                        </a>
                        <a href="https://letterboxd.com/walterosborne/films/by/entry-rating/" target='_blank'>
                            <img src='https://play-lh.googleusercontent.com/PFcm5Ne2otuXxkCNgql_XtpHjYrlhIGGQRFaz9XLFg2wikmMP5YCv_OsvFe1PLDAvGg' alt="" />
                        </a>
                        <a href="https://www.linkedin.com/in/walter-osborne/" target='_blank' >
                            <img src='/Images/linkedin.webp' alt="" />
                        </a>
                    </div>
                </div>
            </div>

            <HomeButton />
        </>
    );
}

export default Navbar;
