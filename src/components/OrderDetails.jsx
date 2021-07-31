import { ChevronRightIcon } from '@heroicons/react/outline';
import moment from 'moment';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { getOrderDetailsStart } from '../redux/Orders/orders.actions';
import { numberWithCommas } from '../utils';
import FlexRow from './FlexRow';
import { ShippingDetails } from './ShippingDetails';

const mapState = ({ ordersData }) => ({
	order: ordersData.orderDetails,
});

export const OrderDetails = () => {
	const { order } = useSelector(mapState);
	const dispatch = useDispatch();

	const { orderId } = useParams();

	const { items, total, id, orderCreatedDate, shipping } = order;

	useEffect(() => {
		dispatch(getOrderDetailsStart(orderId));
		return () => dispatch(getOrderDetailsStart(''));
	}, [orderId, dispatch]);

	return (
		<div className='mb-8'>
			<h1 className='mt-4 ml-4 text-lg font-bold'>Order Details</h1>
			{order && orderCreatedDate && shipping ? (
				<div className="mt-5">
					<div className='mx-4 text-sm'>
						<FlexRow
							title={'Order Date:'}
							value={moment(orderCreatedDate.toDate()).format('MMMM Do, YYYY')}
						/>
						<FlexRow title={'Order ID:'} value={id} />
						<FlexRow title={'Total:'} value={`$ ${numberWithCommas(total)}`} />
						<Link
							to={`/order/${id}/payment-details`}
							className='flex items-center font-bold text-xs'
						>
							Payment details <ChevronRightIcon className='h-3 w-3' />
						</Link>
					</div>
					<div className='items mx-4 mt-4'>
						{Array.isArray(items) &&
							items.length > 0 &&
							items.map((item, pos) => {
								const {
									id,
									name,
									thumbnails,
									price,
									category,
									quantity,
								} = item;
								return (
									<div key={pos} className='flex mt-4 first:mt-0'>
										<img
											src={thumbnails[0]}
											alt=''
											className='shadow-md w-[120px] h-[120px] object-contain rounded-lg mr-3'
										/>
										<div className='flex text-sm'>
											<h3 className='font-semibold'>{name}</h3>
											<div className='flex-col font-medium'>
												<p className='whitespace-nowrap'>{`$ ${numberWithCommas(
													price
												)}`}</p>
												<p className='text-right'>x{quantity}</p>
											</div>
										</div>
									</div>
								);
							})}
					</div>
					<ShippingDetails {...shipping} />
				</div>
			) : (
				<h1>Not found</h1>
			)}
		</div>
	);
};
