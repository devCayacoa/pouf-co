import React from 'react';
import PropTypes from 'prop-types';

export const FormInput = ({
	children,
	label,
	handleChange,
	name,
	type,
	value,
	inputClasses,
	labelClasses,
	...props
}) => (
	<>
		{label && (
			<label htmlFor={name} className={labelClasses}>
				{label}
			</label>
		)}
		<input
			name={name}
			type={type}
			onChange={(e) => handleChange(e)}
			value={value}
			className={inputClasses}
			{...props}
		>
			{children}
		</input>
	</>
);

FormInput.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]),
	label: PropTypes.string,
	handleChange: PropTypes.func.isRequired,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	name: PropTypes.string,
	inputClasses: PropTypes.string,
	labelClasses: PropTypes.string,
};
