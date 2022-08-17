import './Mycard.css';

import Footer from '../../../footer/Footer';

function MyCard() {
    return (
        <div className='mycard-container'>
            <div className='my-card'>
                <div className='mImg'>
                    <div className='m-img'>
                        <img src="https://cdn.glitch.global/6a19564e-7f95-4bcb-afee-8473720639e4/grad.jpg?v=1660705966565" alt="" className='myImg' />
                    </div>
                </div>
                <br />
                <h2 className='myhead'>About</h2>
                <div className='myP'>
                    <br />
                    <div className='green'>
                    <p>Uyioghsoa <u>Marvis</u> Igbineweka is a Nigerian by birth from Benin City, Edo State–who is currently based in the United States of America to complete and obtain his degree in Computer Information technology. His journey through college has to be the part of his educational process he had started learning what he actually desired for a life long career. He started off in business informatics, dealing with the a light touch of business and how programming can be implemented and helpful to business strategies and outcomes.</p>
                    </div>

                    <div className='trans'>
                    <p>Starting my education in business informatics at Idaho State University, I was able to learn and understand the school system in U.S, as ISU was the first university I started my high level education at. I studied the basics of informative science at ISU, been introduced to this university by a couple of friends fo mine, I knew little to nothing of what I was getting myself into in regards to a higher education. It was more or less a struggle getting used to the system here as u have mentioned before, but after a few weeks in school, I had gotten used to it and and catching up as well. I spent about a year and a half before deciding to continue my process in a different fields...I did ask for a major change at Idaho State University, but the area of field I was interested in was not credited, so i decided to search for a different school that credit such, At the Brigham young University-Idaho, web design and development was offered, so i had found the course/major that wou;d help me groom my skills for a career. I am currently a junior in my major and have a coup of semesters before i graduate and continue the res of my life's journey in success.
                    <br /><br />

                    He graduated with his long-awaited Bachelor's Degree in Web Design and Development and currently working as a freelancer.</p>
                    </div>

                    <div className='red'>
                    <p>He is currently proficient in JavaScript, C# and Java. Although His major includes web design, He emphasized his studies on web development.</p>
                    </div>

                    <div className='trans'>
                    <p>After his pursuit of his Bachelor's Degree, Marvis is currently seeking a Diploma in Business Management and hope to use this path as another means to help others with their businesses</p>
                    </div>

                    <div className='blue'>
                    <p>Overall He is fun to work with and a hard-working guy. His hobbies are video games, soccer, basketball and a bit of ping-pong. He considers himself to be an atlethic guy. He brings smile and happiness to the people around him, what more can a guy ask for.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default MyCard;