import React, {useState} from 'react';
import '../ratingStars/comments.css'



export const CommentBox = () => {

    const [comment, setComment] = useState("");
    const [comments, setComments]= useState([]);
    const onClickHandler = () => {
        setComments((comments)=> [...comments, comment]);
    };
    const onChangeHandler = (e) => {
     setComment(e.target.value);
    };
   
  return (
    <div className='main-container'>
        {comments.map((text)=>(
            <div className='comment-container'>{text}</div>
        ))}
        
        <div className='comment-flexBox'>
        <h3 className="comment-text">Comments:</h3>
        <textarea value={comment} 
        onChange={onChangeHandler} 
        className='input-box'
        placeholder='Leave a comment'/>
        <button onClick={onClickHandler} className='comment-btn'>Submit</button>
        
        </div>
    
    </div>
  )
}

export default CommentBox
