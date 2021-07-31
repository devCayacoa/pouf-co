import React from 'react';
import PropTypes from 'prop-types';

const AuthWrapper = ({ children, headline, ...props }) => (
	<div className='auth-wrapper'>
		<div className='wrap'>
			{headline && <h1 className='headline'>{headline}</h1>}
			<div className='children'>{children && children}</div>{' '}
		</div>
	</div>
);

AuthWrapper.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.arrayOf(PropTypes.node),
	]).isRequired,
	headline: PropTypes.string,
};

export default AuthWrapper;
