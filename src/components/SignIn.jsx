import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from 'react-router';

import { AuthWrapper } from './AuthWrapper';

import { ForgotPassword } from './ForgotPassword';
import { Button } from './forms/Button';
import { FormInput } from './forms/FormInput';

import {
	emailSignInStart,
	googleSignInStart,
} from '../redux/User/user.actions';

const initialState = {
	email: '',
	password: '',
	errors: [],
};

const mapState = ({ user }) => ({ currentUser: user.currentUser });

export const SignIn = () => {
	const [form, setForm] = useState(initialState);

	const history = useHistory();

	const dispatch = useDispatch();
	const { currentUser } = useSelector(mapState);

	const handleGoogleSignIn = (e) => dispatch(googleSignInStart());

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm((prevForm) => ({ ...prevForm, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const { email, password } = form;
		dispatch(emailSignInStart({ email, password }));
	};

	useEffect(() => {
		if (currentUser) {
			setForm(initialState);
			history.push('/');
		}
		return () => {};
	}, [currentUser]);

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
				<Button onClick={handleGoogleSignIn}>Sign in with Google</Button>
				<ForgotPassword />
			</AuthWrapper>
		</div>
	);
};
