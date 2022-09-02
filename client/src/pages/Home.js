import React from 'react';
import { useQuery } from '@apollo/client';

import RequestList from '../components/RequestList';
import RequestForm from '../components/RequestForm';

import { QUERY_REQUESTS } from '../utils/queries';

import '../styles/Header.css';

import Hero1 from "../assets/Superhero1.png"
import Hero2 from "../assets/Superhero-2.png"
import Hero3 from "../assets/Superhero-3.png"
import Hero4 from "../assets/Superhero-4.png"
import Hero5 from "../assets/Superhero-5.png"
import LogoBlk from "../assets/5.png"



const Home = () => {
  const { loading, data } = useQuery(QUERY_REQUESTS);
  const requests = data?.requests || [];

  return (
    <main>
            <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}>
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
      <div>
       <img id="LogoBlk" src={LogoBlk} alt=''/>
       <h1 id='home1'> Citizens are waiting for your help...</h1>
      </div>
      <div>        
          <img id="Hero1" src={Hero1} alt=''/>
          <img id="Hero2" src={Hero2} alt=''/>
          <img id="Hero3" src={Hero3} alt=''/>
          <img id="Hero4" src={Hero4} alt=''/>
          <img id="Hero5" src={Hero5} alt=''/>
      </div>

    </main>
  );

};


export default Home;