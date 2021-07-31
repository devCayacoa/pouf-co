import React from 'react';
import PropTypes from 'prop-types';

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
				{...otherProps}
			>
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

Select.propTypes = {
	options: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
		})
	).isRequired,
	defaultValue: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired,
	label: PropTypes.string,
};

export default Select;
