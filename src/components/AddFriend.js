import React from 'react';

const AddFriend = () => {
	return (
		<div>
			<h2>Add Friend</h2>
			<form>
				<div>
					<label htmlfor='username'>Username </label>
					<input id='username' />
				</div>

				<div>
					<label htmlfor='age'>Age </label>
					<input id='age' />
				</div>

				<div>
					<label htmlfor='email'>Email </label>
					<input id='username' />
				</div>
				<button name='Submit'>Submit</button>
			</form>
		</div>
	);
};

export default AddFriend;

// #### Build the addFriends component

// * - [ ] Use the [mockup provided](./addfriends_mockup.png) to build out a simple component allowing you to collect data to add in a new friend.
// * - [ ] The component should include a form with inputs for each friend attribute and a submit button.
// * - [ ] When submitting the form, make a call to the approprate api endpoint with your new friend data. Remember that this is a protected route.
// * - [ ] In `App.js`, add a route to allow this component to be displayed when navigating to `/friends/add`.
