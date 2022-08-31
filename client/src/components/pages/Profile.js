import React from 'react';

import '../../styles/Portfolio.css';

export default function Profile() {
  return (
    <div>

      <div className='box'>
       

        <div>
          <h1>Lamb</h1>
          <p>Release Date: <strong>9/2/2022</strong></p>
        </div>
      </div>


      <div className='box'>
    
        <div>
          <h1>UnsubHub</h1>
          <p>Summary: UnsubHub is the hub to manage subscriptions you plan to cancel.</p>
          <p>Tools: CSS and Bootstrap, JavaScript, Node, Express, Handlebars, MySQL and Sequelize, Calendar link npm
          </p>
            <a href="https://github.com/tshadday/Subscription-Tracker-Service">Github</a>
        </div>
      </div>



      <div className='box'>

        <div>
          <h1>sadLibs</h1>
          <p>Summary: The idea of this project is to create a satirical version of an ad lib creator. The target audience is you, the person seeking entertainment.</p>
          <p>Tools: HTML, CSS and Bootstrap, JavaScript, Madlibz API, WordsAPI
          </p>
          <p>
            <a href="https://github.com/mike-gonz0/sadLibs">Github</a>
            <br/>
            <a href="https://mike-gonz0.github.io/sadLibs">Deploy</a>
            </p>
        </div>
      </div>



    </div>

  )
}