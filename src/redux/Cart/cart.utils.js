export const existingCartItem = ({ prevCartItems, nextCartItem }) =>
	prevCartItems.find(
		(cartItem) =>
			cartItem.id === nextCartItem.id && cartItem.color === nextCartItem.color
	);

export const handleAddToCart = ({ prevCartItems, nextCartItem }) => {
	const quantityIncrement = 1;
	const cartItemExists = existingCartItem({ prevCartItems, nextCartItem });
	if (cartItemExists) {
		return prevCartItems.map((cartItem) =>
			cartItem.id === nextCartItem.id && cartItem.color === nextCartItem.color
				? {
						...cartItem,
						quantity: cartItem.quantity + quantityIncrement,
				  }
				: cartItem
		);
	}
	return [
		...prevCartItems,
		{
			...nextCartItem,
			quantity: quantityIncrement,
		},
	];
};

export const handleDeleteFromCart = (prevCartItems, cartItemToDelete) =>
	prevCartItems.filter((item) => item.id !== cartItemToDelete.id);

export const handleDecrementCartItem = (prevCartItems, cartItemToDecrement) => {
	const existingCartItem = prevCartItems.find(
		(item) => item.id === cartItemToDecrement.id
	);
	if (existingCartItem.quantity === 1) {
		return prevCartItems.filter((item) => item.id !== cartItemToDecrement.id);
	}

	return prevCartItems.map((item) =>
		item.id === existingCartItem.id
			? {
					...item,
					quantity: item.quantity - 1,
			  }
			: item
	);
};
