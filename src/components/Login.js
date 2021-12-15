import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
	const { push } = useHistory();

	const [creds, setCreds] = useState({
		username: '',
		password: '',
	});

	const handleChange = (e) => {
		setCreds({
			...creds,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post('http://localhost:9000/api/login', creds)
			.then((res) => {
				localStorage.setItem('token', res.data.payload);
				push('/friends');
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div>
			<h1>Login</h1>
			<form>
				<div>
					<label htmlFor="username"> Username </label>
					<input
						onChange={handleChange}
						type="text"
						id="username"
						name="username"
					/>
				</div>

				<div>
					<label htmlFor="password"> Password </label>
					<input
						onChange={handleChange}
						name="password"
						type="password"
						id="password"
					/>
				</div>
				<button onClick={handleSubmit}>Submit</button>
			</form>
		</div>
	);
};

export default Login;
