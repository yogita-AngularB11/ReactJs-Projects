import React from 'react'
import "../customDiv.css"
import { NavLink } from 'react-router-dom'

const LearnReact = () => {
  return (
    <>
      <h3>React Tutorial</h3>

      <ul type='none' className='list' >

            <li> <NavLink className="nav-link" to="/react/introduction">
            React Introduction
          </NavLink></li>

            <li>React Getting Started</li>
            <li>Upgrade React</li>
            <li>React ES6 </li>
      </ul>
    </>
  )
}

export default LearnReact
