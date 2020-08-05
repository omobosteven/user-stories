import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { Input, Switch, Card, Button } from 'antd';
import PropTypes from 'prop-types';
import doLoginUser from '../actions/login';
import '../styles/loginPage.scss';

const LoginComponent = ({ isLoggedIn, isAdmin, onLoginUser }) => {
	const { handleSubmit, control } = useForm();

	const onSubmit = (data) => {
		onLoginUser(data);
	};

	if (isLoggedIn) {
		const navigateToPage = isAdmin ? '/stories' : '/create-story';
		return <Redirect to={navigateToPage} />;
	}

	return (
		<Card title="Login Form" bordered={false} style={{ width: 350 }} className="login-form-card">
			<form onSubmit={handleSubmit(onSubmit)}>
				<Controller as={<Input placeholder="Email" type="email" />} name="email" control={control} />
				<Controller as={<Input.Password placeholder="Password" />} name="password" control={control} />

				<Button htmlType="submit" className="login-btn">
					SIGN IN
				</Button>
				<Controller as={<Switch checked={false} />} name="isAdmin" control={control} label="Admin" />
				<span className="toggle-name">Admin</span>
			</form>
		</Card>
	);
};

LoginComponent.propTypes = {
	isLoggedIn: PropTypes.bool.isRequired,
	isAdmin: PropTypes.bool.isRequired,
	onLoginUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
	onLoginUser: (payload) => dispatch(doLoginUser(payload)),
});

const mapStateToProps = (state) => ({
	isAdmin: state.userState.isAdmin,
	isLoggedIn: state.userState.isLoggedIn,
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
