import React from 'react';

export const FormInput = ({ children, label, handleChange, ...props }) => (
	<div className='form-row'>
		{label && <label htmlFor={props.name}>{label}</label>}
		<input
			className='form-input rounded text-black border-2 font-bold p-2 mt-2 w-full'
			onChange={handleChange}
			{...props}
		>
			{children}
		</input>
	</div>
);
