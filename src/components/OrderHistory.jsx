import React, { useEffect } from 'react';
import Order from './Order';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import {
	getUserOrderHistoryStart,
	setUserOrderHistory,
} from '../redux/Orders/orders.actions';
import { LoadMore } from './LoadMore';
import { Link } from 'react-router-dom';

const mapState = ({ user, ordersData }) => ({
	currentUser: user.currentUser,
	orders: ordersData.orderHistory,
});

export const OrderHistory = () => {
	const { currentUser, orders } = useSelector(mapState);
	const dispatch = useDispatch();

	let { status } = useParams();
	if (!status) status = 'all';
	const { data, queryDoc, isLastPage } = orders;

	useEffect(() => {
		dispatch(getUserOrderHistoryStart({ uid: currentUser.id, status }));
		return () => dispatch(setUserOrderHistory({}));
	}, [currentUser.id, status, dispatch]);

	const handleLoadMore = () =>
		dispatch(
			getUserOrderHistoryStart({
				uid: currentUser.id,
				status,
				startAfterDoc: queryDoc,
				persistOrders: data,
			})
		);

	const configLoadMore = {
		handleLoadMore,
		style: { width: '100%' },
		className:
			'block bg-brown mx-2 text-white font-bold rounded mt-4 py-2 px-4',
	};
	const filters = [
		{ name: 'All orders', value: 'all' },
		{ name: 'Processing', value: 'processing' },
		{ name: 'Shipped', value: 'shipped' },
		{ name: 'Delivered', value: 'delivered' },
	];
	return (
		<div className=''>
			<h1 className='font-bold text-lg mt-4 ml-4'>Order history</h1>
			<div
				id=''
				className='scrolling-wrapper flex flex-nowrap overflow-x-auto font-semibold whitespace-nowrap mt-8 pb-3.5 pl-4 '
			>
				{filters.map(({ name, value }) => (
					<Link
						to={`/orders/${value}`}
						className={
							(status === value
								? 'font-semibold'
								: 'font-medium text-secondary') + ' mr-4 last:pr-5'
						}
					>
						{name}
					</Link>
				))}
			</div>
			<div className='bg-tertiary pt-2 first:mt-0'>
				{Array.isArray(data) && data.length > 0 ? (
					data.map((order, index) => <Order key={index} {...order} />)
				) : (
					<div className='text-center'>
						<h2 className='text-secondary font-semibold mx-8'>
							You haven't made any purchases yet
						</h2>
						<Link
							to='/search/'
							className='mt-4 block bg-brown w-40 text-white px-8 py-2 rounded mx-auto whitespace-nowrap font-bold text-sm'
						>
							Go shopping
						</Link>
					</div>
				)}
			</div>

			{!isLastPage && !data && <LoadMore {...configLoadMore} />}
		</div>
	);
};
