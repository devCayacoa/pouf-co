import React from 'react';
import PropTypes from 'prop-types';
import { useAuth } from '../components/customHooks';

const WithAuth = (props) => useAuth(props) && <>{props.children}</>;

WithAuth.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]),
};

export default WithAuth;
