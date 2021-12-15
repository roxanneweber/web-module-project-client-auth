import React from 'react';

const AddFriend = () => {
	return (
		<div>
			<h2>Add Friend</h2>
			<form>
				<div>
					<label htmlfor="username">Username </label>
					<input id="username" />
				</div>

				<div>
					<label htmlfor="age">Age </label>
					<input id="age" />
				</div>

				<div>
					<label htmlfor="email">Email </label>
					<input id="username" />
				</div>
				<button name="Submit">Submit</button>
			</form>
		</div>
	);
};

export default AddFriend;
