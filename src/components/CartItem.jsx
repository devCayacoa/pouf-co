import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Button } from './forms/Button';
import { FormInput } from './forms/FormInput';
import { numberWithCommas } from '../utils';
import {
	addProduct,
	decrementCartItem,
	deleteCartItem,
} from '../redux/Cart/cart.actions';

export const CartItem = ({ item }) => {
	const { price, uid, name, tags, quantity, thumbnails } = item;
	const dispatch = useDispatch();

	const btnStyles = 'font-bold text-md text-green-700 w-4';

	return (
		<div className='p-2' id=''>
			<div id='' className='flex items-center'>
				<img src={thumbnails[0]} className='w-16' alt='' srcSet='' />
				<div className='ml-2' id=''>
					<p className=''>{name}</p>
					<p className=''>${numberWithCommas(price)}</p>
				</div>
				<Button
					className='ml-auto mr-2 text-red-500'
					onClick={() => dispatch(deleteCartItem(item))}
				>
					<FaTrash />
				</Button>
			</div>
			<div className='flex justify-between mt-2'>
				<div className='flex border-2 items-center'>
					<Button
						className={btnStyles}
						onClick={() => dispatch(decrementCartItem(item))}
					>
						-
					</Button>
					<FormInput
						value={quantity}
						type='number'
						className='mx-1 w-12 text-right border-2 border-gray-500 rounded p-1 '
					/>
					<Button
						className={btnStyles}
						onClick={() => dispatch(addProduct(item))}
					>
						+
					</Button>
				</div>
				<div className='mr-4'>
					<h2 className='text-lg font-bold'>
						$ {numberWithCommas(price * quantity)}
					</h2>
				</div>
			</div>
			<hr className='border border-gray-600 mt-2' />
		</div>
	);
};
