import React from 'react'
import "../customDiv.css";
import LearnReact from './LearnReact';
const React_Main = () => {
  return (
    <>  
      <div className='row'>

        <div className='col-md-2 customDiv'>
            <LearnReact/>
        </div>
        <div className='col-md-8'>
        <h1>React Tutorial</h1>
        <p> React is a JavaScript library for building user interfaces.

            React is used to build single-page applications.

           React allows us to create reusable UI components. </p>
      </div>
      </div>
    </>
  )
}

export default React_Main
