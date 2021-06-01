import React from 'react';
import { Link } from 'react-router-dom';
import { numberWithCommas } from '../../utils';

import PropTypes from 'prop-types';
import { CustomHighlight } from '../CustomHighlight';
import './Product.styles.css';
import { Highlight } from 'react-instantsearch-dom';

export const Product = ({ hit }) => (
	<div className='p-4'>
		<Link to={`/product/${hit.objectID}`}>
			<img src={hit.colors[0].thumbnails[0]} alt='' className='' />
		</Link>
		<div className=''>
			<Link to={`/product/${hit.id}`}>
				<CustomHighlight attribute='name' tagName='h3' hit={hit} />
				{/* <h3 className='font-bold text-sm ml-1 mt-2'>{hit.name}</h3> */}
			</Link>

			<h4 className='font-bold text-lg mt-2 ml-1'>
				${numberWithCommas(hit.colors[0].price)}
			</h4>
		</div>
	</div>
);

Product.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		thumbnails: PropTypes.array.isRequired,
	}),
};
