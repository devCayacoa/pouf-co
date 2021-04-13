import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import {
	resetPasswordStart,
	resetUserState,
} from '../redux/User/user.actions';

import { AuthWrapper } from './AuthWrapper';
import { Button } from './forms/Button';
import { FormInput } from './forms/FormInput';

const mapState = ({ user }) => ({
	resetPasswordSuccess: user.resetPasswordSuccess,
	userErr: user.userErr,
});

const EmailPassword = (props) => {
	const [email, setEmail] = useState('');
	const [errors, setErrors] = useState([]);

	const history = useHistory();

	const { resetPasswordSuccess, userErr } = useSelector(mapState);
	const dispatch = useDispatch();

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(resetPasswordStart({ email }));
	};

	useEffect(() => {
		if (resetPasswordSuccess) {
			setEmail('');
			dispatch(resetUserState())
			history.push('/login');
		}
	}, [resetPasswordSuccess]);

	useEffect(() => {
		if (Array.isArray(userErr) && userErr.length > 0) {
			setErrors([userErr]);
		}
	}, [userErr]);

	return (
		<div className='email-password'>
			<AuthWrapper headline='Email Password'>
				{errors.length > 0 && (
					<ul>
						{errors.map((elem, pos) => (
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
						value={email}
						placeholder='Email'
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Button type='submit'>Recover</Button>
				</form>
			</AuthWrapper>
		</div>
	);
};

export default EmailPassword;
