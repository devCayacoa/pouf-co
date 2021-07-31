import React from 'react';
import PropTypes from 'prop-types';

function FlexRow({ title, value }) {
	return (
		<div className='flex justify-between flex-nowrap'>
			<h2 className='font-semibold'>{title}</h2>
			<p className='text-right whitespace-nowrap'>{value}</p>
		</div>
	);
}

FlexRow.propTypes = {};

export default FlexRow;
