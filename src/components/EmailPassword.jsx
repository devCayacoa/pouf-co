import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { resetAuthForms, resetPassword } from '../redux/User/user.actions';
import { AuthWrapper } from './AuthWrapper';
import { Button } from './forms/Button';
import { FormInput } from './forms/FormInput';

const mapState = ({ user }) => ({
	resetPassSuccess: user.resetPassSuccess,
	resetPassError: user.resetPassError,
});

const EmailPassword = (props) => {
	const [email, setEmail] = useState('');
	const [errors, setErrors] = useState([]);

	const history = useHistory();

	const { resetPassSuccess, resetPassError } = useSelector(mapState);
	const dispatch = useDispatch();

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(resetPassword({ email }));
	};

	useEffect(() => {
		if (resetPassSuccess) {
			setEmail('');
			dispatch(resetAuthForms());
			history.push('/login');
		}
	}, [resetPassSuccess]);

	useEffect(() => {
		if (Array.isArray(resetPassError) && resetPassError.length > 0) {
			setErrors([resetPassError]);
		}
	}, [resetPassError]);

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
