import React from 'react';

const Select = ({
	options,
	defaultValue,
	handleChange,
	label,
	...otherProps
}) => {
	if (!Array.isArray(options) || options.length < 1) return null;

	return (
		<div className='formRow'>
			{label && <label>{label}</label>}
			<select
				name=''
				value={defaultValue}
				onChange={handleChange}
				id=''
				className=''
				{...otherProps}>
				{options.map((option, index) => {
					const { value, name } = option;
					return (
						<option key={index} value={value}>
							{name}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default Select;
