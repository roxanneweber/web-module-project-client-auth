import React from 'react';

const FriendsList = () => {
	return (
		<div>
			<h2>Friends List</h2>
			<ul>
				<li>Name - age - email</li>
				<li>Name - age - email</li>
				<li>Name - age - email</li>
				<li>Name - age - email</li>
			</ul>
		</div>
	);
};

export default FriendsList;

// #### Build the friendslist component

// * - [ ] Use the [mockup provided](./friendslist_mockup.png) to build out a simple list component made to display all friends.
// * - [ ] When the component mounts, make a call to the api retrieving all friends.  Remember that this is a protected route.
// * - [ ] In `App.js`, add a route to allow this component to be displayed when navigating to `/friends`
// * - [ ] In your login component, add code to your submission code the ability to redirect to your friendslist component.
