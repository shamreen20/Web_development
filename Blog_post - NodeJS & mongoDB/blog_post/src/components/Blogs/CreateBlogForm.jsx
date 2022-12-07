import React, {useRef, useState, Fragment} from "react";
import "./CreateBlogForm.css";
import {Prompt} from "react-router-dom";
import LoadingSpinner from "../Layout/LoadingSpinner";

const CreateBlogForm = (props) =>
{
  const [isWriting, setIsWriting] =useState(false);
  
  const titleInputRef = useRef();
  const contentInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredContent = contentInputRef.current.value;

     props.onAddBlog({ title: enteredTitle, content: enteredContent });
    
 }

 const pageRoutingHandle =() =>
    {
        setIsWriting(true);
    }

    const FinishEnteringHandler = () =>
    {
      setIsWriting(false);
    }

 
  return(
    <Fragment>
    <Prompt when={isWriting} message = {'Are you sure you want to switch?? all your data will be lost.'} />
    {props.isLoading && (
      <div className="loading">
        <LoadingSpinner />
      </div>
    )}
    <div className="container">
    <h1> Create New Blog</h1>
<form onFocus={pageRoutingHandle} onSubmit={submitFormHandler}>
{/* Title */}
<div className="row">
  <div className="col-md-4">
    <label htmlFor="title">Blog's Title</label>
  </div>
  <div className="col-md-8">
    <input type="text" id="title" name="title" placeholder="Blog Title" ref={titleInputRef} />
  </div>
</div>

{/* Date */}
<div className="row">
  <div className="col-md-4">
    <label htmlFor="Date">Date</label>
  </div>
  <div className="col-md-8">
    <input type="date" id="date" name="date"  />
  </div>
</div>

{/* Content */}

<div className="row">
  <div className="col-md-4">
    <label htmlFor="Content">Content</label>
  </div>
  <div className="col-md-8">
    <textarea type="text" id="Content" name="content" ref={contentInputRef} placeholder="Blog's Content" row="5"  />
  </div>
</div>

<button onClick={FinishEnteringHandler} type="submit" className="btn btn-light">Submit</button>
</form>
</div></Fragment>
)
    
}

export default CreateBlogForm;