import './Home.css';
import Navbar from './Navbar.jsx';
import Bg from './Images/Bg.png'

function Home() {
    return (
        <>
            <Navbar />
            <div className='bg' style={{
                backgroundImage: `url(${Bg})`,
                backgroundSize: `cover`,
            }} />
            <div id="welcome">
                <div><h1>Welcome!</h1></div>
                <div><h2>Walter Osborne's Website</h2></div>
            </div>
        </>
    );
}

export default Home;
