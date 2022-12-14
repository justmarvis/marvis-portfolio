import Head from './head/Head';
import Background from './background/Background';
import Resume from './resume/Resume';
import Skill from './skill/Skill';
import Project from './project/Project';
import Comment from './comment/Comment';

import './Body.css';

function Body() {
    return (
            <div className="body-container">
                <Head />
                <p className='bdy'>The more your scroll <i class="fa fa-arrow-down" aria-hidden="true"></i>, the better it gets!</p>
                <Background />
                <h2 className='heading2'>Resume/CV</h2>
                <div className="firstFlex">
                <Resume  />
                <Skill />
                </div>
                <Project />
                <Comment />
            </div>
    );
}

export default Body;