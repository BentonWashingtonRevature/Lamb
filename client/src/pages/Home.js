import React from 'react';
import { useQuery } from '@apollo/client';

import RequestList from '../components/RequestList';
import RequestForm from '../components/RequestForm';

import { QUERY_REQUESTS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_REQUESTS);
  const requests = data?.requests || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <RequestForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <RequestList
              requests={requests}
              title="Hero Request Feed"
            />
          )}
        </div>
      </div>
    </main>
  );

};


export default Home;