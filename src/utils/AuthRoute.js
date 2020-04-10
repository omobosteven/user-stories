import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const AuthRoute = ({
  component: Component,
  isLoggedIn,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={
        (props) => (isLoggedIn
          ? <Component {...props} />
          : <Redirect to="/" />
        )
      }
    />
  );
};

AuthRoute.propTypes = {
  component: PropTypes.objectOf(PropTypes.any).isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.userState.isLoggedIn
});

export default connect(mapStateToProps)(AuthRoute);
