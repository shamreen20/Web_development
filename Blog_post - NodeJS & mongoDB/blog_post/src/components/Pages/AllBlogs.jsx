import { useEffect } from "react";
import BlogList from "../Blogs/BlogList";
import useHttp from '../hooks/use-http';
import LoadingSpinner from "../Layout/LoadingSpinner";
import PageNotFound from "../Blogs/PageNotFound";


  
  const AllBlogs = () => {

     async function getAllBlogs() {
      const response = await fetch(`http://localhost:8080/feed/posts/blogs.json`);
      const data = await response.json();
    
      if (!response.ok) {
        throw new Error(data.message || 'Could not fetch Blogs.');
      }
    
      const transformedBlogs = [];
    
      for (const key in data) {
        const blogObj = {
          id: key,
          ...data[key],
        };
    
        transformedBlogs.push(blogObj);
      }
    
      return transformedBlogs;
    }

    const { sendRequest, status, data: loadedBlog, error } = useHttp(
      getAllBlogs,
      true
    );
  
    useEffect(() => {
      sendRequest();
    }, [sendRequest]);
  
    if (status === 'pending') {
      return (
        <div className='centered'>
          <LoadingSpinner />
        </div>
      );
    }
  
    if (error) {
      return <p className='centered focused'>{error}</p>;
    }
  
    if (status === 'completed' && (!loadedBlog || loadedBlog.length === 0)) {
      return <PageNotFound />;
      
    }
    return <BlogList blogs={loadedBlog} />;
  }


export default AllBlogs;