import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';

const Nav = (props) => {
  let loginLinkTo = '/login';

  if (props.store.user.id) {
    loginLinkTo = '/admin';
  }

  return (
    <div className="nav">
      <Link to="/">
        <h2 className="nav-title">Prime Solo Project</h2>
      </Link>
      <div className="nav-right">
        <Link className="nav-link" to={loginLinkTo}>
          {/* Show this link if they are logged in or not,
          but call this link 'Welcome' if they are logged in,
          and call this link 'Login / Register' if they are not */}
          {props.store.user.id ? 'Welcome' : 'Login / Register'}
        </Link>
        {/* Show the link to the info page and the logout button if the user is logged in */}
        {props.store.user.id && (
          <>
            {/* '<></>' - this is short syntax for React.Fragment */}
            <Link className="nav-link" to="/info">
              Info Page
            </Link>
            <LogOutButton className="nav-link"/>
          </>
        )}
        {/* Always show this link since the about page is not protected */}
        <Link className="nav-link" to="/about">
          About
        </Link>
      </div>
    </div>
  )
};

export default connect(mapStateToProps)(Nav);
