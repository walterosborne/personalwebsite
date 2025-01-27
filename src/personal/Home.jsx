import './Home.css';
import Navbar from './Navbar.jsx';

function Home() {
    return (
        <>
            <Navbar />
            <img className='bg' src='Images/Bg.png' alt="Background" />
            <div className='outerbox'>
                <div id="welcome" className='colbox'>
                    <h1>Welcome!</h1>
                    <h2>Walter Osborne's Website</h2>
                </div>
            </div>
        </>
    );
}

export default Home;
