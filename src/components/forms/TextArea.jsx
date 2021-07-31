import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({
	children,
	label,
	handleChange,
	rows,
	cols,
	name,
	value,
	inputClasses,
	labelClasses,
	...props
}) => (
	<div className='form-row'>
		{label && (
			<label htmlFor={name} className={labelClasses}>
				{label}
			</label>
		)}
		<textarea
			className={inputClasses}
			onChange={handleChange}
			rows={rows}
			cols={cols}
			value={value}
			{...props}
		>
			{children}
		</textarea>
	</div>
);

TextArea.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]),
	label: PropTypes.string,
	handleChange: PropTypes.func.isRequired,
	value: PropTypes.string,
	rows: PropTypes.number,
	cols: PropTypes.number,
	name: PropTypes.string,
	inputClasses: PropTypes.string,
	labelClasses: PropTypes.string,
};

export default TextArea;
