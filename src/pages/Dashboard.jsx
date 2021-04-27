import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { OrderHistory } from '../components/OrderHistory';
import { getUserOrderHistoryStart } from '../redux/Orders/orders.actions';

const mapState = ({ user, ordersData }) => ({
	currentUser: user.currentUser,
	ordersHistory: ordersData.orderHistory,
});

const Dashboard = () => {
	const { currentUser, ordersHistory } = useSelector(mapState);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getUserOrderHistoryStart(currentUser.id));
	}, [currentUser.id, dispatch]);
	return (
		<div className=''>
			<h1 id='' className=''>
				Welcome to your account!
			</h1>

			<OrderHistory orders={ordersHistory} />
		</div>
	);
};

export default Dashboard;
