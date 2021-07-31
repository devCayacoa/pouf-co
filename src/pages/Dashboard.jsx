import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { OrderHistory } from '../components/OrderHistory';

const Dashboard = () => {
	return <Redirect to='/orders/all' />;
};

export default Dashboard;
