import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { CountryDropdown } from 'react-country-region-selector';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
	selectCartItems,
	selectCartItemsCount,
	selectCartTotal,
} from '../redux/Cart/cart.selectors';
import { apiInstance } from '../utils';
import { Button } from './forms/Button';
import { FormInput } from './forms/FormInput';
import { useHistory } from 'react-router';
import { saveOrderHistoryStart } from '../redux/Orders/orders.actions';

// const initialAddress = {
// 	line1: '',
// 	line2: '',
// 	city: '',
// 	state: '',
// 	postalCode: '',
// 	country: '',
// };

const initialAddress = {
	line1: 'Example',
	line2: 'Example',
	city: 'Example',
	state: 'Example',
	postal_code: 'Example',
	country: 'US',
};

const mapState = createStructuredSelector({
	total: selectCartTotal,
	itemCount: selectCartItemsCount,
	cartItems: selectCartItems,
});

export const PaymentDetails = () => {
	const history = useHistory();

	const stripe = useStripe();
	const elements = useElements();

	const { total, itemCount, cartItems } = useSelector(mapState);
	const dispatch = useDispatch();

	const [billing, setBilling] = useState({ ...initialAddress });
	const [shipping, setShipping] = useState({ ...initialAddress });
	const [nameOnCard, setNameOnCard] = useState('Example');
	const [recipientName, setRecipientName] = useState('Example');

	useEffect(() => {
		if (itemCount < 1) history.push('/dashboard');
	}, [itemCount, history]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const cardElement = elements.getElement('card');
		if (
			!shipping.line1 ||
			!shipping.state ||
			!shipping.postal_code ||
			!shipping.country ||
			!billing.line1 ||
			!billing.state ||
			!billing.postal_code ||
			!billing.country ||
			!recipientName ||
			!nameOnCard
		)
			return;
		console.log('Submitting');
		apiInstance
			.post('/payments/create', {
				amount: total * 100,
				shipping: {
					name: recipientName,
					address: { ...shipping },
				},
			})
			.then(async ({ data: clientSecret }) => {
				try {
					const result = await stripe.createPaymentMethod({
						type: 'card',
						card: cardElement,
						billing_details: {
							name: nameOnCard,
							address: { ...billing },
						},
					});
					if (result.error) throw new Error(result.error.message);
					const { paymentMethod } = result;

					const { paymentIntent } = await stripe.confirmCardPayment(
						clientSecret,
						{
							payment_method: paymentMethod.id,
						}
					);
					console.log('Payment intent: ', paymentIntent);
					const configOrder = {
						total: parseFloat(total),
						items: cartItems.map(
							({ id, thumbnails, name, price, quantity }) => ({
								id,
								name,
								price,
								quantity,
								thumbnails,
							})
						),
						shipping: paymentIntent.shipping,
					};
					dispatch(saveOrderHistoryStart(configOrder));
					// dispatch(clearCart());
				} catch (error) {
					console.log(error.message);
				}
			});
	};

	const handleShipping = (e) => {
		const { name, value } = e.target;
		setShipping((prevValue) => ({ ...prevValue, [name]: value }));
	};

	const handleBilling = (e) => {
		const { name, value } = e.target;
		setBilling((prevValue) => ({ ...prevValue, [name]: value }));
	};

	const configCountryDropdown = {
		valueType: 'short',
	};

	const configCardElement = {
		iconStyle: 'solid',
		style: {
			base: {
				fontSize: '16px',
			},
		},
		hidePostalCode: true,
	};

	return (
		<div className=''>
			<form onSubmit={handleSubmit}>
				<div className=''>
					<h2 className=''>Shipping</h2>
					<FormInput
						type='text'
						name='recipientName'
						value={recipientName}
						handleChange={(e) => setRecipientName(e.target.value)}
						placeholder='Recipient name'
						required
					/>
					<FormInput
						type='text'
						name='line1'
						value={shipping.line1}
						handleChange={handleShipping}
						placeholder='Line 1'
						required
					/>

					<FormInput
						type='text'
						name='line2'
						value={shipping.line2}
						handleChange={handleShipping}
						placeholder='Line 2'
					/>

					<FormInput
						type='text'
						name='city'
						value={shipping.city}
						handleChange={handleShipping}
						placeholder='City'
						required
					/>

					<FormInput
						type='text'
						name='state'
						value={shipping.state}
						handleChange={handleShipping}
						placeholder='State'
						required
					/>

					<FormInput
						type='text'
						name='postal_code'
						value={shipping.postal_code}
						handleChange={handleShipping}
						placeholder='Postal Code'
						required
					/>

					<CountryDropdown
						{...configCountryDropdown}
						value={shipping.country}
						onChange={(value) =>
							handleShipping({
								target: { name: 'country', value },
							})
						}
						required
					/>
				</div>
				<div className=''>
					<h2 className=''>Billing</h2>
					<FormInput
						type='text'
						value={nameOnCard}
						name='nameOnCard'
						handleChange={(e) => setNameOnCard(e.target.value)}
						placeholder='Name on card'
						required
					/>
					<FormInput
						type='text'
						name='line1'
						value={billing.line1}
						handleChange={handleBilling}
						placeholder='Line 1'
						required
					/>

					<FormInput
						type='text'
						name='line2'
						value={billing.line2}
						handleChange={handleBilling}
						placeholder='Line 2'
					/>

					<FormInput
						type='text'
						name='city'
						value={billing.city}
						handleChange={handleBilling}
						placeholder='City'
						required
					/>

					<FormInput
						type='text'
						name='state'
						value={billing.state}
						handleChange={handleBilling}
						placeholder='State'
						required
					/>

					<FormInput
						type='text'
						name='postal_code'
						value={billing.postal_code}
						handleChange={handleBilling}
						placeholder='Postal Code'
						required
					/>

					<CountryDropdown
						{...configCountryDropdown}
						value={billing.country}
						onChange={(value) =>
							handleBilling({
								target: { name: 'country', value },
							})
						}
						required
					/>
				</div>
				<div className=''>
					<h2 className=''>Card Details</h2>
					<CardElement
						className={'p-2 my-4'}
						options={{ ...configCardElement }}
					/>
				</div>
				<Button
					type='submit'
					className='p-2 bg-green-500 text-white font-bold rounded'
				>
					Pay now
				</Button>
			</form>
		</div>
	);
};
