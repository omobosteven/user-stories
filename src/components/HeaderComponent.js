import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Button } from 'antd';
import doLogOutUser from '../actions/logOut';
import '../styles/header.css';

const HeaderComponent = ({
  isLoggedIn, isAdmin, user, onLogOutUser,
}) => {
  const handleLogOut = () => {
    onLogOutUser();
  };

  return (
    <header className="main-header">
      <h1 className="main-header__title">
        UserStory
        <span className="main-header__username">
          {isLoggedIn && `${user.firstName} ${user.lastName}`}
        </span>
      </h1>
      {isLoggedIn
      && <div className="main-header__navigation">
        {!isAdmin && <NavLink to="/create-story">Create Story</NavLink>}
        <NavLink to="/stories">View Stories</NavLink>
        <Button className="logout-btn" onClick={() => handleLogOut()}>Logout</Button>
        </div>}
    </header>
  );
};

HeaderComponent.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  user: PropTypes.objectOf(PropTypes.any).isRequired,
  onLogOutUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAdmin: state.userState.isAdmin,
  isLoggedIn: state.userState.isLoggedIn,
  user: state.userState.user,
});

const mapDispatchToProps = (dispatch) => ({
  onLogOutUser: () => dispatch(doLogOutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
