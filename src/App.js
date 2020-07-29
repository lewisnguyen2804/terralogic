import React, { Component } from 'react';
import './App.css';
import './styles/style.scss';

import Login from './pages/Login';
import {
	Router,
	Switch,
	Route
} from "react-router-dom";

import Register from './pages/Register';
import PrivateRoute from './components/PrivateRoute';
import ProfileContainer from './pages/Profile';

import { history } from './helpers';
import { connect } from 'react-redux';

class App extends Component {
	render() {
		const { alert } = this.props;
		const alertType = alert.type === 'alert-success' ? 'bg-success':'bg-danger';
		return (
			<div>
				{alert.message &&
					<div className={`text-center text-white p-2 fixed-top ${alertType}`}>
						{alert.message}
					</div>
				}

				<Router history={history}>
					<div>
						<Switch>
							<PrivateRoute exact path="/" component={ProfileContainer} />
							<Route path="/login">
								<Login />
							</Route>
							<Route path="/register">
								<Register />
							</Route>
						</Switch>
					</div>
				</Router>
			</div>
		);
	}
}

let mapStateToProps = (state) => {
	const { alert } = state;
	return { alert };
}

const ConnectedApp = connect(mapStateToProps)(App);
export default ConnectedApp;
