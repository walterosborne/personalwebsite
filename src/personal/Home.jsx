import styles from './Home.css';
import Navbar from './Navbar.jsx';
import Bg from './Bg.jpeg'

function Home() {
    return (
        <>
            <Navbar />
            <div id='bg' style={{
                backgroundImage: `url(${Bg})`,
                backgroundSize: `cover`,
            }} />
            <div id="welcome">

                <div><h1>Welcome!</h1></div>
                <div><h2>Walter Osborne Portfolio Website</h2></div>
            </div>
        </>
    );
}

export default Home;
