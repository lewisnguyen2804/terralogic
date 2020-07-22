import React from 'react';
import './App.css';

import Profile from './pages/Profile';
import Login from './pages/Login';
import {
	Router,
	Switch,
	Route
} from "react-router-dom";
import Register from './pages/Register';

import { history } from './helpers';

function App() {
	return (
		<Router history={history}>
			<div>
				<Switch>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/register">
						<Register />
					</Route>
					<Route path="/profile">
						<Profile />
					</Route>
					<Route path="/">
						<Login />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
