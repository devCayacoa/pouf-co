import React from 'react';
import { Button } from './forms/Button';
import PropTypes from 'prop-types';

export const LoadMore = ({ handleLoadMore, ...props }) => (
	<Button onClick={handleLoadMore} {...props}>
		Load more...
	</Button>
);

LoadMore.propTypes = {
	handleLoadMore: PropTypes.func.isRequired,
};
