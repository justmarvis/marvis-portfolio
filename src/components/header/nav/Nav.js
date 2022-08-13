import './Nav.css';

import ProjectList from '../projectlist/ProjectList';

import { Link } from "react-router-dom";

function Nav() {
    return (
        <div className='nav-container'>
            {/* list of navigation links starts here */}
                <ul>
                     <Link to='/testimonials' className='nk'><li className='lk na'>testimonials</li></Link>
                    <Link to='/about' className='nk'><li className='lk na'>about me</li></Link>
                    <p className='pro'>projects</p>
                    <div className="drpdwn">
                        <span><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                        <div className='drpdwn-content'>
                                <ProjectList />
                        </div>
                    </div>
                    <a href='https://cdn.glitch.global/6a19564e-7f95-4bcb-afee-8473720639e4/marvisigbineweka-resume.pdf?v=1659941191168' target='blank'><li className="reS">resume <i className="fa fa-download" aria-hidden="true"></i></li></a>
                 </ul>
            {/* list of navigation links ends here */}
        </div>
    );
}

export default Nav;