import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { auth, signInWithGoogle } from '../firebase/utils';
import { AuthWrapper } from './AuthWrapper';
import { ForgotPassword } from './ForgotPassword';
import { Button } from './forms/Button';
import { FormInput } from './forms/FormInput';

const initialState = {
	email: '',
	password: '',
	errors: [],
};

export const SignIn = () => {
	const [form, setForm] = useState(initialState);
	const history = useHistory();

	const GoogleLogin = async (e) => {
		e.preventDefault();
		await signInWithGoogle();
		history.push('/');
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm((prevForm) => ({ ...prevForm, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const { email, password } = form;

		auth.signInWithEmailAndPassword(email, password).catch((error) => {
			console.log('Sign in with email and password says: ' + error.message);
			setForm((prevForm) => ({ ...prevForm, errors: [error.message] }));
		});
		setForm(initialState);

		history.push('/');
	};

	return (
		<div className='signin'>
			<AuthWrapper headline={'Log In'}>
				<ul>
					{form.errors.length > 0 &&
						form.errors.map((elem, pos) => <li key={pos}>{elem}</li>)}
				</ul>
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
