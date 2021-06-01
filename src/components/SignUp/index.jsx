import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { signUpUserStart, userError } from '../../redux/User/user.actions';
import AuthWrapper from '../AuthWrapper';
import { Button } from '../forms/Button';
import { FormInput } from '../forms/FormInput';

import './SignUp.styles.css';

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
const SignUp = () => {
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
			signUpUserStart({
				displayName,
				email,
				password,
				confirmPassword,
			})
		);
	};

	useEffect(() => {
		if (currentUser) {
			setForm(initialState);
			history.push('/');
		}
		return () => {
			dispatch(userError(''));
		};
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
				<form action='' onSubmit={handleSubmit} className='sign-in-form'>
					<FormInput
						type='text'
						value={form.displayName}
						name='displayName'
						placeholder='Full name'
						className='input'
						onChange={handleChange}
						required
					/>
					<FormInput
						type='email'
						value={form.email}
						name='email'
						placeholder='Email'
						className='input'
						onChange={handleChange}
						required
					/>
					<FormInput
						type='password'
						value={form.password}
						name='password'
						placeholder='Password'
						className='input'
						onChange={handleChange}
						required
					/>
					<FormInput
						type='password'
						value={form.confirmPassword}
						name='confirmPassword'
						placeholder='Confirm password'
						className='input'
						onChange={handleChange}
						required
					/>
					<Button id='register-btn' type='submit' className='register-btn btn'>
						Register
					</Button>
				</form>
				<Link to='/login' className='link'>
					<h3 className='underline'>Log in with an existing account</h3>
				</Link>
			</AuthWrapper>
		</div>
	);
};

export default SignUp;
