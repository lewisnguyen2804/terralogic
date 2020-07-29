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
import { alertActions } from './actions';
import { bindActionCreators } from 'redux';

class App extends Component {
	render() {
		const { alert } = this.props;
		const alertType = alert.type === 'alert-success' ? 'bg-success' : 'bg-danger';
		return (
			<div>
				{alert.message &&
					<div className={`alert-in-app text-center fade show text-white p-2 fixed-top ${alertType}`}>
						{alert.message}
						<div className="alert-dissmiss-btn">
							<button
								type="button"
								onClick={() => { this.props.alertClear() }}
								class="close"
								data-dismiss="alert">&times;</button>
						</div>
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
	const { alert} = state;
	return { alert};
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({
					alertClear: alertActions.clear
	}, dispatch)
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default ConnectedApp;
