import './ProjectList.css'

function ProjectList() {
    return(
        <div className='project-list-container'>
            {/* list of projects starts here */}
                <p className="link fl"><i className="fa fa-circle" aria-hidden="true"></i>Straight</p>
                <p className="link fl"><i className="fa fa-circle" aria-hidden="true"></i>Bit-Box</p>
                <p className="link fl"><i className="fa fa-circle" aria-hidden="true"></i><u>Elle</u>gant Braids</p>    
            {/* list of projects ends here */}
        </div>
    );
}

export default ProjectList;