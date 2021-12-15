import React from 'react';

const Login = () => {
	return (
		<div>
			<h1>Login</h1>
			<form action=''>
				<div>
					<label htmlFor='username'> Username </label>
					<input id='username' />
				</div>

				<div>
					<label htmlFor='password'> Password </label>
					<input type='password' id='password' />
				</div>
				<button>Submit</button>
			</form>
		</div>
	);
};

export default Login;

// #### Build the login component

// * - [ ] Use the [mockup provided](./login_mockup.png) to build out a simple login component.
// * - [ ] In `App.js`, add a route to allow this component to be displayed when navigating to `/` or `/login`
// * - [ ] When submitting your login form, save the token returned to localStorage and redirect to the FriendsList route.

// #### Build a logout button

// * - [ ] Build out a simple component allowing you to logout of your application cleanly.
// * - [ ] The component should make a call to the logout endpoint and remove the token on local storage by default.
// * - [ ] In `App.js`, add a route to allow this component to be displayed when navigating to `/logout`.
// * - [ ] In `App.js`, create a navigation bar that allows the user to redirect to logout, friendslist or add friend.
