import React from 'react'
import About from '../pages/About'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
     <ul>
        <li>
            <Link to={
                 {
                   pathname:"/" 
                 }
            }>Home</Link>
        </li>
        <li>
        <Link to={
                 {
                   pathname:"/login" 
                 }
            }>login</Link>
        </li>
        <li>
        <Link to={
                 {
                   pathname:"/about" 
                 }
            }>about</Link>
        </li>
     </ul>
    </div>
  )
}

export default Nav
