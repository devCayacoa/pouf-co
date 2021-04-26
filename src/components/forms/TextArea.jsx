import React from 'react';

export const TextArea = ({
	children,
	label,
	handleChange,
	rows,
	cols,
	...props
}) => (
	<div className='form-row'>
		{label && <label htmlFor={props.name}>{label}</label>}
		<textarea
			className='form-textarea rounded text-black border-2 font-bold p-2 mt-2 w-full'
			onChange={handleChange}
			rows={rows}
			cols={cols}
			{...props}
		>
			{children}
		</textarea>
	</div>
);
