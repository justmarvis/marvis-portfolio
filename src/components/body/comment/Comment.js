import './Comment.css';

function test() {

    let input0 = document.getElementsByClassName('name').value;
    let input1 = document.getElementsByClassName('comment').value;

    document.getElementsByClassName('commentOut').innerHTML = input0;
}

function Comment() {

    const testimonial = () => {}


    return (
        <div className='comment-container'>
            <form action="/testimonials" method="GET" className="call2action">
                <h4 className='C'>Rate My Work</h4>
                <div className="NAME">
                    <input type="text" placeholder="Name" name="name" id="name" className='name' required />
                </div>
                <div className='RT'>
                    <h5>Rate your experience: </h5>
                    <div className='rt'>
                        <label className='rad'>Bad</label>
                        <input type="radio" className='rd' name="fav_language"></input>
                    </div>
                    <div className='rt'>
                        <label className='rad'>2</label>
                        <input type="radio" className='rd' name="fav_language"></input>
                    </div>
                    <div className='rt'>
                        <label className='rad'>3</label>
                        <input type="radio" className='rd' name="fav_language"></input>
                    </div>
                    <div className='rt'>
                        <label className='rad'>4</label>
                        <input type="radio" className='rd' name="fav_language"></input>
                    </div>
                    <div className='rt'>
                        <label className='rad'>Excellent</label>
                        <input type="radio" className='rd' name="fav_language"></input>
                    </div>
                </div>
                <div className="act">
                    <div className="comet">
                        <textarea name="comment" className='comment' cols="30" rows="10" placeholder="Add Your Comment"></textarea>
                    </div>
                    <button className="fa fa-paper-plane sendButton" aria-hidden="true"  id="sb-out" onClick={testimonial}>
                    </button>
                </div>
                <div className='commentOut'></div>
            </form>
        </div>
    );
}

export default Comment;