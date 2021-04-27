import React from 'react';
import Order from './Order';

export const OrderHistory = ({ orders }) => {
	let data = [];
	if (orders) {
		data = orders.data;
	}
	return (
		<div id='' className=''>
			<h2 className=''>Order history</h2>
			{Array.isArray(data) && data.length > 0 ? (
				data.map((order, pos) => <Order key={pos} {...order} />)
			) : (
				<h2>No orders made...</h2>
			)}
		</div>
	);
};
