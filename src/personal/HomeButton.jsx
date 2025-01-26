import './Navbar.css';
import Home from './Images/Home.png';
import { Link } from 'react-router-dom';

function HomeButton() {
    return (
        <>
            <Link id='homebtn' className='link' to="/">
                <div className='item' id='homebtn'>
                    <img id='home' src={Home} alt="Home" width='35px' ></img>
                    <h2>Home</h2>
                </div>
            </Link>
        </>
    );
}

export default HomeButton;
