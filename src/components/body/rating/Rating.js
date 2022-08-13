import './Rating.css';

function Rating() {
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
        <div className="rating-container">
        <div className='pos'>
            <h4>Work Position:</h4>
            <span className='po'>{position[0]}</span>
        </div>
        <br />
        <div className='rat'>
            <h4>Developer Rating: </h4>
            <span className='ra'>0</span>
        </div>
        </div>
    );
}

export default Rating;