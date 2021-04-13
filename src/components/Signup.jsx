import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { signUpUserStart } from '../redux/User/user.actions';
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
	currentUser: user.currentUser,
	userErr: user.userErr,
});

export const SignUp = () => {
	const [form, setForm] = useState(initialState);

	const history = useHistory();

	const dispatch = useDispatch();
	const { currentUser, userErr } = useSelector(mapState);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm((prevForm) => ({ ...prevForm, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const { displayName, email, password, confirmPassword } = form;
		dispatch(
			signUpUserStart({ displayName, email, password, confirmPassword })
		);
	};

	useEffect(() => {
		if (currentUser) {
			setForm(initialState);
			history.push('/');
		}
	}, [currentUser]);

	useEffect(() => {
		if (Array.isArray(userErr) && userErr.length > 0) {
			setForm((prevState) => ({ ...prevState, errors: userErr }));
		}
	}, [userErr]);

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
