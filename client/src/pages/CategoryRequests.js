import React from 'react';
import "../styles/CategoryRequest"

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_CATEGORY_REQUESTS } from '../utils/queries';

const CategoryRequest = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { categoryId } = useParams();

  const { loading, data } = useQuery(QUERY_CATEGORY_REQUESTS, {
    // pass URL parameter
    variables: { categoryId: categoryId },
  });

  const request = data?.request || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-3">
      <h3 className="card-header bg-dark text-light p-2 m-0">
        {request.requestAuthor} <br />
        <span style={{ fontSize: '1rem' }}>
          had this thought on {request.createdAt}
        </span>
      </h3>
      <div className="bg-light py-4">
        <blockquote
          className="p-4"
          style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            border: '2px dotted #1a1a1a',
            lineHeight: '1.5',
          }}
        >
          {request.title}
        </blockquote>
      </div>
      
    

    </div>
  );
};

export default CategoryRequest;
