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
import CartItem from './CartItem';
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
		<div className='p-4'>
			<h1 className='text-lg font-bold'>Shopping bag</h1>
			<div className='text-sm flex items-center mt-2'>
				<div className='rounded-full w-2 h-2 bg-blue-400 mr-1'></div> Waiting
				for payment
			</div>
			<div
				id=''
				className='scrolling-wrapper flex flex-nowrap overflow-x-auto font-semibold whitespace-nowrap mt-8 pl-4 pb-3.5'
			>
				{Array.isArray(cartItems) &&
					cartItems.length > 0 &&
					cartItems.map(({ id, thumbnails }) => (
						<img
							className='w-32 h-32 mr-4 object-contain'
							src={thumbnails[0]}
							onClick={() => history.push(`/product/${id}`)}
							alt='product'
						/>
					))}
			</div>
			{/* <div id='' className='flex flex-col'>
				{cartItems.length > 0 ? (
					cartItems.map((item, index) => <CartItem key={index} item={item} />)
				) : (
					<h2 className=''>Add some items to your cart...</h2>
				)}
			</div> */}
			{itemsCount > 0 && (
				<h3 id='' className='text-right'>
					{itemsCount} item(s) total:
					<span className='font-bold'> ${numberWithCommas(itemsTotal)}</span>
				</h3>
			)}
			<Button
				className='btn w-20 whitespace-nowrap py-1 ml-auto'
				onClick={() => history.push('/payment')}
			>
				Pay now
			</Button>
		</div>
	);
};
