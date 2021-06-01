import React from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/outline';

const ShopNow = ({ link }) => {
	return (
		<Link
			to={link}
			className='inline-flex items-center text-lg font-bold border-2 border-brown rounded px-1'
		>
			Shop now <ArrowRightIcon className='w-5 ml-1 font-bold' />
		</Link>
	);
};

ShopNow.propTypes = { link: PropTypes.string };

export default ShopNow;
