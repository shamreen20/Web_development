import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import CreateBlogForm from "../Blogs/CreateBlogForm";
import useHttp from "../hooks/use-http";


const NewBlog =() => {

   async function addBlog(Data) {
    const response = await fetch(`http://localhost:8080/feed/posts/blogs.json`, {
      method: 'POST',
      body: JSON.stringify(Data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
  
    if (!response.ok) {
      throw new Error(data.message || 'Could not create blog.');
    }
  
    return null;
  }


    const {sendRequest,status} = useHttp(addBlog);
    
    const history = useHistory();

    useEffect(() => {
      if(status === "completed"){
        history.push("/blogs")
      }

    },[status,history])

    const addBlogHandler = (Data) => {
        sendRequest(Data)

        history.push('/blogs');
      };
    
      return <CreateBlogForm isLoading={status === "pending"} onAddBlog={addBlogHandler} />;
}

export default NewBlog;