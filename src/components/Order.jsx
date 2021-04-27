import React from 'react';
import { numberWithCommas } from '../utils';
import moment from 'moment';
import { Link } from 'react-router-dom';

const Order = ({ id, total, orderCreatedDate }) => {
	return (
		<div className='p-2'>
			<Link to={`/order/${id}`}>
				<h3 className=''>{id}</h3>
				<h4 className=''>$ {numberWithCommas(total)}</h4>
				<h4 className=''>
					{moment(orderCreatedDate.toDate()).format(
						'MMMM Do[,] YYYY [at] h:mm:ss a'
					)}
				</h4>
			</Link>
		</div>
	);
};

export default Order;
