import React, { Component } from 'react';
import './App.css';
import './styles/style.scss';

import { Router, Switch, Route, Redirect } from "react-router-dom";

import Login from './pages/Login';
import Register from './pages/Register';
import PrivateRoute from './components/PrivateRoute';
import ProfileContainer from './pages/Profile';
import NotFound from './pages/NotFound';

import { history } from './helpers';
import { connect } from 'react-redux';
import { alertActions } from './actions';
import { bindActionCreators } from 'redux';

import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class App extends Component {
	render() {
		const { alert } = this.props;
		const toastOptions = {
			position: "top-left",
			autoClose: 5000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			transition: Zoom,
		}
		const toastContainer = alert.type === 'alert-success' ? toast.success(alert.message, toastOptions) : toast.error(alert.message, toastOptions);
		return (
			<div>
				{/* ALERT */}
				{alert.message
					&& toastContainer
					&& <ToastContainer />}

				<Router history={history}>
					<Switch>
						<PrivateRoute exact path="/" component={ProfileContainer} />
						<Route path="/login">
							<Login />
						</Route>
						<Route path="/register">
							<Register />
						</Route>
						{/* 404 */}
						<Route component={NotFound} />
					</Switch>
				</Router>
			</div>
		);
	}
}

let mapStateToProps = (state) => {
	const { alert } = state;
	return { alert };
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		alertClear: alertActions.clear
	}, dispatch)
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default ConnectedApp;
