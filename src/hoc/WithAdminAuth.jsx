import React from 'react';
import PropTypes from 'prop-types';
import { useAdminAuth } from '../components/customHooks';

const WithAdminAuth = (props) => useAdminAuth(props) && <>{props.children}</>;

WithAdminAuth.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]),
};

export default WithAdminAuth;
