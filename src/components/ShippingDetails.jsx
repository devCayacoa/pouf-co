import React from 'react';
import PropTypes from 'prop-types';

export const ShippingDetails = ({
	name: recipientName,
	address: { line1, line2, city, state, postal_code, country },
}) => {
	return (
		<div className='mx-4 mt-6 text-md'>
			<h2 className='font-semibold'>Shipping info</h2>
			<p className='mt-3'>{recipientName}</p>
			<p className=''>{line1}</p>
			<p className=''>{line2}</p>
			<p className=''>
				{city}, {state} {postal_code}
			</p>
			<p className=''>{country}</p>
		</div>
	);
};

ShippingDetails.propTypes = {
	name: PropTypes.string.isRequired,
	address: PropTypes.shape({
		line1: PropTypes.string.isRequired,
		line2: PropTypes.string.isRequired,
		city: PropTypes.string.isRequired,
		state: PropTypes.string.isRequired,
		postal_code: PropTypes.string.isRequired,
		country: PropTypes.string.isRequired,
	}),
};
