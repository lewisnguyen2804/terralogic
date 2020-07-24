import React from 'react';
import './App.css';
import Profile from './pages/Profile';
import Login from './pages/Login';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import LoginNoRWD from './pages/LoginNoRWD';

function App() {
	return (
		<Router>
			<div>
				<Switch>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/login-no-rwd">
						<LoginNoRWD />
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
