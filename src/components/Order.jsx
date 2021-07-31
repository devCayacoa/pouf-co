import React from 'react';
import { numberWithCommas } from '../utils';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ChevronRightIcon } from '@heroicons/react/outline';

const Order = ({ status, id, total, orderCreatedDate, items }) => {
	const history = useHistory();
	return (
		<div className='bg-white mt-1 pb-2.5'>
			<h2 className='font-semibold font-lg pt-4 ml-4'>
				{status.charAt(0).toUpperCase() + status.slice(1)}
			</h2>
			<h3 className='mt-2 ml-4 text-sm'>
				Order ID:
				<span className='font-medium'> {id}</span>
			</h3>
			<div
				id=''
				className='scrolling-wrapper flex flex-nowrap overflow-x-auto font-semibold whitespace-nowrap mt-8 pl-4 pb-3.5'
			>
				{Array.isArray(items) &&
					items.length > 0 &&
					items.map(({ id, thumbnails }) => (
						<img
							className='w-32 mr-4'
							src={thumbnails[0]}
							onClick={() => history.push(`/product/${id}`)}
							alt='product'
						/>
					))}
			</div>
			<h3 className='mt-3.5 text-right text-medium text-sm mr-5'>
				{items.length} item(s) Total:
				<span className='font-bold text-[#323232]'>
					${numberWithCommas(total)}
				</span>
			</h3>
			<Link
				to={`/order/${id}`}
				className='mt-2.5 font-semibold text-right text-[15px] flex items-center justify-end mr-5 '
			>
				Order details <ChevronRightIcon className='h-3 w-3' />
			</Link>
		</div>
	);
};

Order.propTypes = {
	id: PropTypes.string.isRequired,
	total: PropTypes.number.isRequired,
	orderCreatedDate: PropTypes.object.isRequired,
};

export default Order;
