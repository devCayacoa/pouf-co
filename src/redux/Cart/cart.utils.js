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
