import { Fragment } from 'react';

import Blog from './Blog';
import  './BlogList.css';

const BlogList = (props) => {
  return (
    <Fragment>
      <ul className="list">
        {props.blogs.map((blog) => (
          <Blog
            key={blog.id}
            id={blog.id}
            title={blog.title}
            content={blog.content}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default BlogList;