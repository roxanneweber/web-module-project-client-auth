import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Link,
} from 'react-router-dom';
import './App.css';

// component imports
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';

function App() {
	return (
		<Router>
			<div className="App">
				<header>
					<h2>Friends Database</h2>
					<Link className="link" to="/login">
						Login
					</Link>
					<Link className="link" to="/friends">
						Friends List
					</Link>
					<Link className="link" to="/friends/add">
						Add Friend
					</Link>
					<Link className="link" to="/logout">
						Logout
					</Link>
				</header>
				<Route exact path="/">
					<Login />
				</Route>
				<Route exact path="/login">
					<Redirect to="/" />
				</Route>
				<Route exact path="/friends">
					<FriendsList />
				</Route>
				<Route exact path="/friends/add">
					<AddFriend />
				</Route>
			</div>
		</Router>
	);
}

export default App;
