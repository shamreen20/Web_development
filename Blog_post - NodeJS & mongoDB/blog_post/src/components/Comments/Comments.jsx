import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import './Comment.css';
import NewCommentForm from './NewCommentForm';
import useHttp from '../hooks/use-http';
import LoadingSpinner from '../Layout/LoadingSpinner';
import CommentsList from './CommentList';

const Comments = () => {

   async function getAllComments(blogId) {
    const response = await fetch(`http://localhost:8080/feed/posts/comments/${blogId}.json`);
  
    const data = await response.json();
  
    if (!response.ok) {
      throw new Error(data.message || 'Could not get comments.');
    }
  
    const transformedComments = [];
  
    for (const key in data) {
      const commentObj = {
        id: key,
        ...data[key],
      };
  
      transformedComments.push(commentObj);
    }
  
    return transformedComments;
  }

  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams();

  const { blogId } = params;

  const { sendRequest, status, data: loadedComments } = useHttp(getAllComments);

  useEffect(() => {
    sendRequest(blogId);
  }, [blogId, sendRequest]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addedCommentHandler = useCallback(() => {
    sendRequest(blogId);
  }, [sendRequest, blogId]);

  let comments;

  if (status === 'pending') {
    comments = (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );
  }

  if (status === 'completed' && loadedComments && loadedComments.length > 0) {
    comments = <CommentsList  comments={loadedComments} />;
  }

  if (
    status === 'completed' &&
    (!loadedComments || loadedComments.length === 0)
  ) {
    comments = <p className='centered'>No comments were added yet!</p>;
  }

  return (
    <section className="comments">
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm
          blogId={blogId}
          onAddedComment={addedCommentHandler}
        />
      )}
    {comments}
    </section>
  );
};

export default Comments;