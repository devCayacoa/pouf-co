import moment from 'moment';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getOrderDetailsStart } from '../redux/Orders/orders.actions';
import { Product } from './Product';
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
		<div className=''>
			<h1 className=''>Order Details</h1>
			{order && orderCreatedDate && shipping ? (
				<div>
					<div className='grid grid-cols-2'>
						<h2 className=''>Order Date</h2>
						<p className=''>
							{moment(orderCreatedDate.toDate()).format('MMMM Do, YYYY')}
						</p>

						<h2 className=''>Order ID</h2>
						<p className=''>{id}</p>

						<h2 className=''>Order total</h2>
						<p className=''>$ {total.toLocaleString()}</p>
					</div>
					{Array.isArray(items) &&
						items.length > 0 &&
						items.map((item, pos) => {
							const { id, name, thumbnails, price, category, quantity } = item;
							return (
								<div key={pos} className='border-2 grid grid-cols-3'>
									<div className='border-2 w-20'>
										<img src={thumbnails[0]} alt='' />
									</div>
									<div className=''>
										<h3>{name}</h3>
										<p> Qty: {quantity}</p>
									</div>
									<h2>${price}</h2>
								</div>
							);
						})}
					<ShippingDetails {...shipping} />
				</div>
			) : (
				<h1>Not found</h1>
			)}
		</div>
	);
};
