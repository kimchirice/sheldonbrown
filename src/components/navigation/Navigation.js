import React from 'react'
import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom'
import Home from '../../pages/home/Home'
import About from '../../pages/About'
import './Navigation.css'

export default function Navigation() {
  return ( 
    <Router>
      <>        
        <nav className='navbar' role='navigation'>
          <div className="img-logo">
            <img src="" alt="logo"/>
          </div>
          <ul className="menu">
            <li className='nav-item'>
              <NavLink exact to="/" className='nav-link'>Home</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to="/about" className='nav-link'>About</NavLink></li>
          </ul>
        </nav>
        <Switch>  
          <Route exact path='/' ><Home /></Route>
          <Route path='/about'><About /></Route>
        </Switch>
      </>
    </Router>  
  )
}