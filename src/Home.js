import './Home.css';
import Bg from './Bg.jpeg'

function Home() {
    return (
        <>
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
