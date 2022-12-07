import CommentItem from './CommentItem';
import './CommentList.css';

const CommentsList = (props) => {
  return (
    <ul className="comments">
      {props.comments.map((comment) => (
        <CommentItem key={comment.id} content={comment.content} />
      ))}
    </ul>
  );
};

export default CommentsList;

