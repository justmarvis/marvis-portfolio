import ProjectList from './projectlist/ProjectList';
import { NavLink, Link } from "react-router-dom";
import Nav from './nav/Nav';

// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './Header.css';

function Header() {
    return (
            <div className="header-container">
                {/* contents on the header components */}
                {/* contents of app header starts here  */}
                <div className="head">
                    <div className="title">
                        <Link to='/' className='nk'><h1 className="site-name">marvis</h1></Link>
                        <Link to='/' className='nk'><p className="byline">dev</p></Link>
                    </div>
                    <div className='app-img'>
                        <div className='appImg'>
                            <img src='https://cdn.glitch.global/6a19564e-7f95-4bcb-afee-8473720639e4/me1.jpg?v=1659936307198' alt='' className='appIg' />
                        </div>
                    </div>
                    <div className="header-links">
                        <ul>
                            <NavLink to='/testimonials' className='nk'><li className='lk'>testimonials</li></NavLink>
                            <NavLink to='/about' className='nk'><li className='lk'>about me</li></NavLink>
                            <p className='pro'>project sites</p>
                            <div className="dropdown">
                                <span><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                                <div className='dropdown-content'>
                                    <ProjectList />
                                </div>
                            </div>
                            <a href='https://cdn.glitch.global/6a19564e-7f95-4bcb-afee-8473720639e4/marvisigbineweka-resume.pdf?v=1659941191168' target='blank'><li className="reS">resume <i className="fa fa-download" aria-hidden="true"></i></li></a>
                        </ul>
                    </div>
                </div>
                {/* contents of app header ends here */}

                {/* links to my social networks start here */}
                <div className="social">
                <a href='https://www.facebook.com/Shimadev-108727651941566/' target='blank'><li><i className="fa fa-facebook" aria-hidden="true"></i></li></a>
                <a href='https://www.linkedin.com/in/marvis-igbineweka' target='blank'><li><i className="fa fa-linkedin" aria-hidden="true"></i></li></a>
                <a href='https://www.instagram.com/marvis_ig/' target='blank'><li><i className="fa fa-instagram" aria-hidden="true"></i></li></a>
                <a href='https://www.youtube.com/channel/UCglrwG2h4gHI4LFrTVy03-A' target='blank'><li><i className="fa fa-youtube-play" aria-hidden="true"></i></li></a>
                <a href='https://twitter.com/mqrvis' target='blank'><li><i className="fa fa-twitter" aria-hidden="true"></i></li></a>
                </div>
                {/* links to my socials networks end here */}
                <div className='ham'>
                    <div className="dropdown">
                        <i className="fa fa-bars" aria-hidden="true"></i>
                        <div className='dropdown-content menu'>
                            <Nav />
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Header;