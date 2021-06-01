import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from 'react-router';
import { FormInput } from '../forms/FormInput';

import {
	emailSignInStart,
	googleSignInStart,
	userError,
} from '../../redux/User/user.actions';
import AuthWrapper from '../AuthWrapper';

import { Link } from 'react-router-dom';

import './SignIn.styles.css';

const initialState = {
	email: '',
	password: '',
	errors: [],
};

const mapState = ({ user }) => ({ currentUser: user.currentUser });

const SignIn = () => {
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
		return () => {
			dispatch(userError(''));
		};
	}, [currentUser, history]);

	return (
		<div className='signin'>
			<AuthWrapper headline='Log In'>
				<ul>
					{form.errors.length > 0 &&
						form.errors.map((elem, pos) => <li key={pos}>{elem}</li>)}
				</ul>
				<form className='sign-in-form' action='' onSubmit={handleSubmit}>
					<FormInput
						type='email'
						name='email'
						value={form.email}
						placeholder='Email'
						handleChange={handleChange}
						className='input'
					/>
					<FormInput
						type='password'
						name='password'
						value={form.password}
						placeholder='Password'
						handleChange={handleChange}
						className='input'
					/>
					<div className='btn-wrapper'>
						<button className='btn' type='submit'>
							Sign in
						</button>
						<button className='btn google-btn' onClick={handleGoogleSignIn}>
							Sign in with Google
						</button>
					</div>
				</form>
				<Link to='/recovery' className='link'>
					<h3 className='underline'>Forgot password?</h3>
				</Link>
				<Link to='/registration' className='link'>
					<h3 className='underline'>Create an account</h3>
				</Link>
			</AuthWrapper>
		</div>
	);
};

export default SignIn;
