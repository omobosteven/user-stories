import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import {
  Input, Switch, Card, Button,
} from 'antd';
import PropTypes from 'prop-types';
import doLoginUser from '../actions/login';

const LoginComponent = ({ isLoggedIn, isAdmin, onLoginUser }) => {
  const {
    handleSubmit, control,
  } = useForm();

  const onSubmit = (data) => {
    onLoginUser(data);
  };

  if (isLoggedIn) {
    const navigateToPage = isAdmin ? '/admin/getStories' : '/createStory';
    return <Redirect to={navigateToPage} />;
  }

  return (
    <Card style={{ width: 300 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller as={<Input placeholder="Enter Your Email" type="email" />} name="email" control={control} defaultValue="" />
        <Controller as={<Input.Password placeholder="Enter Your Password" />} name="password" control={control} defaultValue="" />
        <br />
        <Button htmlType="submit">Login</Button>
        <br />
        <Controller as={<Switch />} name="admin" control={control} />
        <span>Admin</span>
      </form>
    </Card>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onLoginUser: (payload) => dispatch(doLoginUser(payload)),
});

const mapStateToProps = (state) => ({
  isAdmin: state.userState.isAdmin,
  isLoggedIn: state.userState.isLoggedIn,
});

LoginComponent.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  onLoginUser: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
