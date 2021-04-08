import React, { useState } from 'react';
import { auth, signInWithGoogle } from '../firebase/utils';
import { AuthWrapper } from './AuthWrapper';
import { ForgotPassword } from './ForgotPassword';
import { Button } from './forms/Button';
import { FormInput } from './forms/FormInput';

const initialState = {
	email: '',
	password: '',
};

export const SignIn = () => {
	const [form, setForm] = useState(initialState);

	const GoogleLogin = (e) => {
		e.preventDefault();
		signInWithGoogle();
	};
	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const { email, password } = form;
		try {
			auth.signInWithEmailAndPassword(email, password);
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<div className='signin'>
			<AuthWrapper headline={'Log In'}>
				<form action='' onSubmit={handleSubmit}>
					<FormInput
						type='email'
						name='email'
						value={form.email}
						placeholder={'Email'}
						onChange={handleChange}
					/>
					<FormInput
						type='password'
						name='password'
						value={form.password}
						placeholder={'Password'}
						onChange={handleChange}
					/>
					<Button type='submit'>Sign in</Button>
				</form>
				<Button onClick={GoogleLogin}>Sign in with Google</Button>
				<ForgotPassword />
			</AuthWrapper>
		</div>
	);
};
