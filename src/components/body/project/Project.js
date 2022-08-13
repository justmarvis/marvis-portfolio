import './Project.css';

import Github from './github/Github';

function Project() {
    return (
        <div className='project-container'>
            <h2 className='proj'>Projects</h2>

            {/* latest project section starts here */}
            <div className='flex-colored'>
                <div className='text'>
                    <h3 className='h3'>Latest Project</h3>
                    <p className='p'>Much like Netflix, Bix-Box would allow you to stream movies, tv shows and even music and be able to save these as well for recalls! Inspiration gotten from the Disney + and Netflix streaming panel with a christmas theme to it. e241</p>
                </div>
                <div className='visual'>
                    <img src='https://cdn.glitch.global/6a19564e-7f95-4bcb-afee-8473720639e4/bit-box.png?v=1659664737878' className='colored' alt='' />
                </div>
            </div>
            {/* latest project section ends here */}

            {/* project list section starts here */}
            <Github />
            {/* project list gallery section ends here */}

            {/* my life as a developer section starts here */}
            <div className='flex-colored'>
                <div className='text'>
                    <h3 className='h3'>My life as a developer</h3>
                    <p className='p'>Enjoy this few minutes of explanation on how a work on projects as a developer. My life as a developer is not all about coding but also adventures-discoveries set in.</p><br />[This video is just a placeholder for an official documentation of my work].
                </div>
                <div className='visual'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/SmxrUmaAOz0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className='colored'></iframe>
                </div>
            </div>
            {/* my life as a developer section ends here */}
        </div>
    );
}

export default Project;