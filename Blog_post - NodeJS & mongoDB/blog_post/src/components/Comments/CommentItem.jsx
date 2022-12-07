import  './CommentItem.css';

const CommentItem = (props) => {
  return (
    <li className="item">
      <p>{props.content}</p>
    </li>
  );
};

export default CommentItem;