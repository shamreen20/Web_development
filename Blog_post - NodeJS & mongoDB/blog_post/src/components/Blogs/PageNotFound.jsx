
import { Link } from 'react-router-dom';

import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <div className='noquotes'>
      <p>No Blog found!</p>
      <Link className='btn' to='/new-blog'>
        Add a Blog
      </Link>
      
    </div>
  );
};

export default PageNotFound;