import './ProjectList.css'

function ProjectList() {
    return(
        <div className='project-list-container'>
            {/* list of projects starts here */}
                <p className="link fl"><i className="fa fa-circle" aria-hidden="true"></i><a href='/' target='blank'>Straight</a></p>
                <p className="link fl"><i className="fa fa-circle" aria-hidden="true"></i><a href='/' target='blank'>Bit-Box</a></p>
                <p className="link fl"><i className="fa fa-circle" aria-hidden="true"></i><a href='/' target='blank'><u>Elle</u>gant Braids</a></p>  
                <p className="link fl"><i className="fa fa-circle" aria-hidden="true"></i><a href='https://justmarvis.github.io/downloads/' target='blank'>Developer Downloads</a></p>
            {/* list of projects ends here */}
        </div>
    );
}

export default ProjectList;