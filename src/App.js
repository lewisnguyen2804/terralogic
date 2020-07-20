import React from 'react';
import './App.css';
import Profile from './pages/Profile';
import Login from './pages/Login';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

function App() {
	return (
		<Router>
			<div>
				<Switch>
					<Route path="/login">
						<Login />
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
