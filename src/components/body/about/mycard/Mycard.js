import './Mycard.css';

import Footer from '../../../footer/Footer';

function MyCard() {
    return (
        <div className='mycard-container'>
            <div className='my-card'>
                <div className='mImg'>
                    <img src="https://cdn.glitch.global/6a19564e-7f95-4bcb-afee-8473720639e4/me1.jpg?v=1659936307198" alt="" className='myImg' />
                </div><br />
                <h2 className='myhead'>About</h2>
                <div className='myP'>
                    <br />
                    <div className='green'>
                    <p>I am a Nigerian from Benin City, Edo State–who is currently based in the United States of America to complete and obtain my degree in Web Design and Development. My journey through college has to be the part of my educational processs, I had started learning what i actually desired to learn and have been yarning to learn fro a long long time. I started off in business informatics, the informative part of business was intriguing and i wanted to know what it was all about. It later became helpful in my further studies.</p>
                    </div>

                    <div className='trans'>
                    <p>Starting my education in business informatics at Idaho State University, I was able to learn and understand the school system in U.S, as ISU was the first university I started my high level education at. I studied the basics of informative science at ISU, been introduced to this university by a couple of friends fo mine, I knew little to nothing of what I was getting myself into in regards to a higher education. It was more or less a struggle getting used to the system here as u have mentioned before, but after a few weeks in school, I had gotten used to it and and catching up as well. I spent about a year and a half before deciding to continue my process in a different fields...I did ask for a major change at Idaho State University, but the area of field I was interested in was not credited, so i decided to search for a different school that credit such, At the Brigham young University-Idaho, web design and development was offered, so i had found the course/major that wou;d help me groom my skills for a career. I am currently a junior in my major and have a coup of semesters before i graduate and continue the res of my life's journey in success.</p>
                    </div>

                    <div className='red'>
                    <p>I am proficient in JavaScript, C# and Java. Although my major includes web design, I emphasized my studies on web development.</p>
                    </div>

                    <div className='blue'>
                    <p>Overall I am a fun and hard-working guy(when it comes to computers at least). I love video games, play soccer, basketball and a bit of ping-pong. I consider myself to be an atlethic guy. I bring smile and happiness to the people around me, what more can a guy ask for.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default MyCard;