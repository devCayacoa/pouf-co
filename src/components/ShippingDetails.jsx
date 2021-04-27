import React from 'react';

export const ShippingDetails = ({
	name: recipientName,
	address: { line1, line2, city, state, postal_code, country },
}) => {
	return (
		<div className=''>
			<h2 className=''>Shipping info</h2>

			<p className=''>{recipientName}</p>
			<p className=''>{line1}</p>
			<p className=''>{line2}</p>
			<p className=''>
				{city}, {state} {postal_code}
			</p>
			<p className=''>{country}</p>
		</div>
	);
};
