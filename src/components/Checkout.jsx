import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { createStructuredSelector } from 'reselect';
import {
	selectCartItems,
	selectCartItemsCount,
	selectCartTotal,
} from '../redux/Cart/cart.selectors';
import { numberWithCommas } from '../utils';
import { CartItem } from './CartItem';
import { Button } from './forms/Button';

const mapState = createStructuredSelector({
	cartItems: selectCartItems,
	itemsTotal: selectCartTotal,
	itemsCount: selectCartItemsCount,
});
export const Checkout = ({}) => {
	const history = useHistory();
	const { cartItems, itemsTotal, itemsCount } = useSelector(mapState);

	return (
		<div className=''>
			<h1 className='text-xl font-bold'>Checkout</h1>
			{itemsCount > 0 && (
				<div className='flex'>
					<h3 id='' className=''>
						{itemsCount} item(s)
					</h3>
					<h3 id='' className='ml-2'>
						${numberWithCommas(itemsTotal)}
					</h3>
				</div>
			)}
			<div id='' className='flex flex-col'>
				{cartItems.length > 0 ? (
					cartItems.map((item, index) => <CartItem key={index} item={item} />)
				) : (
					<h2 className=''>Add some items to your cart...</h2>
				)}
			</div>
			<Button
				className='border border-gray-600'
				onClick={() => history.goBack()}
			>
				Continue shopping
			</Button>
			<Button
				className='ml-2 border border-gray-600'
				onClick={() => history.push('/payment')}
			>
				Checkout
			</Button>
		</div>
	);
};
