import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { auth, handleUserProfile } from '../firebase/utils';
import { resetAuthForms, signUpUser } from '../redux/User/user.actions';
import { AuthWrapper } from './AuthWrapper';
import { Button } from './forms/Button';
import { FormInput } from './forms/FormInput';

const initialState = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: '',
	errors: [],
};

const mapState = ({ user }) => ({
	signUpSuccess: user.signUpSuccess,
	signUpError: user.signUpError,
});

export const SignUp = () => {
	const [form, setForm] = useState(initialState);

	const history = useHistory();

	const dispatch = useDispatch();
	const { signUpSuccess, signUpError } = useSelector(mapState);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm((prevForm) => ({ ...prevForm, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const { displayName, email, password, confirmPassword } = form;

		dispatch(signUpUser({ displayName, email, password, confirmPassword }));

		// 	if (password !== confirmPassword) {
		// 		const err = ["Passwords don't match"];
		// 		setForm((prevForm) => ({ ...prevForm, errors: [err] }));
		// 		return;
		// 	}
		// 	try {
		// 		const { user } = await auth
		// 			.createUserWithEmailAndPassword(email, password)
		// 			.catch((error) => {
		// 				console.log('Sign in with email and password says: ' + error.message);
		// 				setForm((prevForm) => ({ ...prevForm, errors: [error.message] }));
		// 			});

		// 		await handleUserProfile(user, { displayName });

		// 		setForm(initialState);

		// 		history.push('/');
		// 	} catch (error) {
		// 		console.log(error.message);
		// 	}
	};

	useEffect(() => {
		if (signUpSuccess) {
			setForm(initialState);
			dispatch(resetAuthForms());
			history.push('/');
		}
	}, [signUpSuccess]);

	useEffect(() => {
		if (Array.isArray(signUpError) && signUpError.length > 0) {
			setForm((prevState) => ({ ...prevState, errors: signUpError }));
		}
	}, [signUpError]);

	return (
		<div className='signup'>
			<AuthWrapper headline='Sign Up'>
				{form.errors.length > 0 && (
					<ul>
						{form.errors.map((elem, pos) => (
							<li key={pos}>{elem}</li>
						))}
					</ul>
				)}
				<form action='' onSubmit={handleSubmit}>
					<FormInput
						type='text'
						value={form.displayName}
						name={'displayName'}
						placeholder={'Full name'}
						onChange={handleChange}
						required
					/>
					<FormInput
						type='email'
						value={form.email}
						name={'email'}
						placeholder={'Email'}
						onChange={handleChange}
						required
					/>
					<FormInput
						type='password'
						value={form.password}
						name={'password'}
						placeholder={'Password'}
						onChange={handleChange}
						required
					/>
					<FormInput
						type='password'
						value={form.confirmPassword}
						name={'confirmPassword'}
						placeholder={'Confirm password'}
						onChange={handleChange}
						required
					/>
					<Button type='submit'>Register</Button>
				</form>
			</AuthWrapper>
		</div>
	);
};
