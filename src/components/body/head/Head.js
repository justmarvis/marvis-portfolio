import './Head.css';
import Pitch from '../pitch/Pitch';
import Rating from '../rating/Rating';

function Head() {
    return (
        <div className="head-container">
            <div className="blck-board">
                <div className="contact">
                <p>Uyioghosa Marvis Igbineweka<br></br>marvinomeccozi@gmail.com <br></br>(801) 809 - 6530 <br></br>&#9614; <br></br>&#9615;</p>
                </div>
                <Pitch />
                <Rating />
            </div>
            <div className="quote-board">
                <p>"When you base your expectations on only what you see, you blind yourself to the possibilities of a new and finer reality"<br></br>Zaheer</p>
            </div>
        </div>
    );
}

export default Head;