import './Pitch.css';

function Pitch() {
    let position = ["Freelancer", "Front-End Developer", "Full-Stack Developer", "Web Developer", "Back-End Developer"];

    let rating = (5 + 5 + 4 + 3) / 4;
    let target = rating;

    const counters = document.querySelectorAll('.ra');
    const speed = 1000;

    counters.forEach(counter => {
        const updateCount = () => {
            const count = +counter.innerText;

            const inc = target / speed;

            if(count < target) {
                counter.innerText = count + inc;
                setTimeout(updateCount, 1);
            } else {}

            // console.log(count);
        }

        updateCount();
    });
    return (
        <div className="pitch">
            <div className='pitchimg'>
                <div className='pitchImg'>
                    <img src='https://cdn.glitch.global/6a19564e-7f95-4bcb-afee-8473720639e4/me1.jpg?v=1659936307198' alt='' className='pitchig' />
                </div>
            </div>
            <p><strong className="hy">Hi,</strong> my name is Uyioghosa Marvis Igbineweka - Marvis. I am studying web design and development in Brigham Young University-Idaho.I am currently a senior and so i am in an intermediate level in my major.
            Currently working on a senior projects. Working alongside with my professor and other of my peers for companies requesting for scratched/restarted projects and maintenance. </p>
            <div className='devrat'>
                <div>
                <span className='position'>{position[0]}</span>
                </div>
                <div>
                <span className='ra'>0</span>
                </div>
            </div>
        </div>
    );
}

export default Pitch;