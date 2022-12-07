import './SelectBlog.css';

const SelectBlog = (props) => {
  return (
    <figure className="blog">
      <p>{props.content}</p>
      <figcaption>{props.title}</figcaption>
    </figure>
  );
};

export default SelectBlog;

