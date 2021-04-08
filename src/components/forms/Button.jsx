import React from 'react';

export const Button = ({ children, ...props }) => {
	return (
		<button
			className='rounded text-white bg-purple-600 font-bold p-2 mt-2 w-full'
			{...props}>
			{children}
		</button>
	);
};
