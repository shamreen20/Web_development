import {Link} from "react-router-dom"

import './Blog.css';

const Blog = (props) => {
  return (
    <li className="item">
      <figure>
        <blockquote>
          <p>{props.content}</p>
        </blockquote>
        <figcaption>{props.title}</figcaption>
      </figure>
      <Link className='btn' to={`/blogs/${props.id}`} >
        See post
      </Link>
    
    </li>
  );
};

export default Blog;