import React from 'react';

export const AuthWrapper = ({ children, headline, ...props }) => {
	return (
		<div className='auth-wrapper'>
			<div className='wrap'>
				{headline && <h2 className='headline'>{headline}</h2>}
				<div className='children'>{children && children}</div>{' '}
			</div>
		</div>
	);
};
