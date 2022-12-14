import './Crd.css';

function Crd() {
    return (
        <div className='crd-container'>
            <div className='crd-mat'>
                <div className='crd-content'>
                    <h5 className='crd-title'>by {}</h5>
                    <p className='crd-com'>"{}"</p>
                    <p className='crd-date'>{}date</p>
                </div>
            </div>

            <div className='crd-mat'>
                <div className='crd-content'>
                    <h5 className='crd-title'>by Peck</h5>
                    <p className='crd-com'>"Your portfolio is amazing, having testimonials included in your site really do you justice 👍🏾. I am a web developer myself and that is a pointer! I have put off creating my own website for too long. I am motivated!"</p>
                    <p className='crd-date'>13/08/2022</p>
                </div>
            </div>

            <div className='crd-mat'>
                <div className='crd-content'>
                    <h5 className='crd-title'>by Micheal</h5>
                    <p className='crd-com'>"Marvis was a study buddy of mine in our first few years as Freshmen in BYU-I. He was always very curious about the things we learnt and the things we were going to eventually learn. It was a good buddy to have study with and i look forward to working with him in the future."</p>
                    <p className='crd-date'>22/05/2022</p>
                </div>
            </div>

            <div className='crd-mat'>
                <div className='crd-content'>
                    <h5 className='crd-title'>by Micheal</h5>
                    <p className='crd-com'>"Marvis Igbineweka was hired as a Full Stack Developer Intern at Brigham Young University - Idaho in the CIT Department in the month of April 2022. He worked for the department for three months. I was very impressed with Marvis’ ability to work with others. Marvis was not afraid to speak up and raise his opinion to the team about their technical direction. In addition, he has very good CSS, HTML, and Web Design skills. Marvis is also learning React Native and has a good Javascript foundation. I am grateful for Marvis and the time he spent as an intern at BYUI. I would recommend him to anyone."</p>
                    <p className='crd-date'>22/05/2022</p>
                </div>
            </div>
        </div>
    );
}

export default Crd;