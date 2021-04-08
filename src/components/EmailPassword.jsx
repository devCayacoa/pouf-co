import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { auth } from '../firebase/utils';
import { AuthWrapper } from './AuthWrapper';
import { Button } from './forms/Button';
import { FormInput } from './forms/FormInput';

const initialState = {
	email: '',
	errors: [],
};

const EmailPassword = (props) => {
	const [form, setForm] = useState(initialState);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const { email } = form;
			const config = {
				url: process.env.REACT_APP_URL + 'login',
			};
			await auth
				.sendPasswordResetEmail(email, config)
				.then(() => {
					console.log('Password reset');
					props.history.push('/login');
				})
				.catch((err) => setForm({ ...form, errors: [err.message] }));
		} catch (error) {
			console.log(error.message);
		}
	};
	return (
		<div className='email-password'>
			<AuthWrapper headline='Email Password'>
				{form.errors.length > 0 && (
					<ul>
						{form.errors.map((elem, pos) => (
							<li className={'text-red-600'} key={pos}>
								{elem}
							</li>
						))}
					</ul>
				)}
				<form onSubmit={handleSubmit}>
					<FormInput
						type='email'
						name='email'
						value={form.email}
						placeholder='Email'
						onChange={handleChange}
					/>
					<Button type='submit'>Recover</Button>
				</form>
			</AuthWrapper>
		</div>
	);
};

export default withRouter(EmailPassword);
