export const existingCartItem = ({ prevCartItems, nextCartItem }) =>
	prevCartItems.find((cartItem) => cartItem.uid === nextCartItem.uid);

export const handleAddToCart = ({ prevCartItems, nextCartItem }) => {
	const quantityIncrement = 1;
	const cartItemExists = existingCartItem({ prevCartItems, nextCartItem });
	if (cartItemExists) {
		return prevCartItems.map((item) =>
			item.uid === nextCartItem.uid
				? {
						...item,
						quantity: item.quantity + quantityIncrement,
				  }
				: item
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
	prevCartItems.filter((item) => item.uid !== cartItemToDelete.uid);

export const handleDecrementCartItem = (prevCartItems, cartItemToDecrement) => {
	const existingCartItem = prevCartItems.find(
		(item) => item.uid === cartItemToDecrement.uid
	);
	if (existingCartItem.quantity === 1) {
		return prevCartItems.filter((item) => item.uid !== cartItemToDecrement.uid);
	}

	return prevCartItems.map((item) =>
		item.uid === existingCartItem.uid
			? {
					...item,
					quantity: item.quantity - 1,
			  }
			: item
	);
};
