import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Loading from '../components/Loading';

const mapState = ({ UIData }) => UIData.loading;

const WithLoading = ({ children }) => {
	const isLoading = useSelector(mapState);
	return isLoading ? <Loading /> : children;
};

WithLoading.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]),
};

export default WithLoading;
