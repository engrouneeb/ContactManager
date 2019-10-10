import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Header = (props)=> {
  const {name} = props
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
      <Link to="/" className="navbar-brand">{name}  </Link>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item"> 
              <Link to="/" className="nav-link">
              <i className="fa fa-home"></i>
              Home
              </Link>
            </li>
            <li className="nav-item"> 
              <Link to="/contact/add" className="nav-link">
              <i className="fa fa-user-plus"></i>
              Add Contact
              </Link>
            </li>
            <li className="nav-item"> 
              <Link to="/about" className="nav-link">
              <i className="fa fa-users"></i>
              About US
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header

Header.defaultProps = {
  name:'myapp'
}

Header.propstype = {
  name: PropTypes.string.isRequired
}
