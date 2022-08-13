import './Skill.css';

function Skill() {
    return(
        <div className="skill-container">
            <div className="skill">
                <div className='experience'>
                    <h5>Experience</h5>
                    <i className="fa fa-certificate" aria-hidden="true"></i>
                    <p>7 yrs in Development</p>
                </div>
                <div className='skil'>
                <h5>Understood Technologies</h5>
                        <div className='tech'>
                            {/* angular */}
                            <li className='lis'><img className="ng" src="https://angular.io/assets/images/logos/angular/angular.svg" alt="" /></li>

                            {/* react */}
                            <li className='lis'><img className="react" src="https://cdn.glitch.global/6a19564e-7f95-4bcb-afee-8473720639e4/logo512.png?v=1659664693445" alt="" /></li>

                            {/* .NET */}
                            <li className='lis'><img className='net' src='https://cdn.glitch.global/6a19564e-7f95-4bcb-afee-8473720639e4/Microsoft_.NET_logo.svg?v=1659664716354' alt='' /></li>

                            {/* .bootstrap */}
                            <li className='lis'><img className="bs" src="https://cdn.glitch.global/6a19564e-7f95-4bcb-afee-8473720639e4/bootstrap.png?v=1659664726210" alt='' /></li>

                            {/* sql */}
                            <li className='lis'><i className="fa fa-database mysql" aria-hidden="true"></i></li>
                        </div>

                        <h5>Understood Languages</h5>
                        <div className='lang'>
                            {/* JavaScript */}
                            <li className='lis'><img className='js' src='https://cdn.glitch.global/6a19564e-7f95-4bcb-afee-8473720639e4/js.png?v=1659664717281' alt='' /></li>

                            {/* Python */}
                            <li className='lis'><img className='py' src='https://cdn.glitch.global/6a19564e-7f95-4bcb-afee-8473720639e4/py.png?v=1660361809516' alt='' /></li>

                            {/* C# */}
                            <li className='lis'><img className="c-sharp" src="https://cdn.glitch.global/6a19564e-7f95-4bcb-afee-8473720639e4/c-sharp.png?v=1659664715977" alt='' /></li>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default Skill;