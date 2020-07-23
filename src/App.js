import React from 'react';
import './App.css';

import Login from './pages/Login';
import {
	Router,
	Switch,
	Route
} from "react-router-dom";
import Register from './pages/Register';
import PrivateRoute from './components/PrivateRoute';

import { history } from './helpers';
import ProfileContainer from './pages/Profile';

function App() {
	return (
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
	);
}

export default App;
