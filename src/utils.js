import axios from 'axios';

export const checkUserIsAdmin = (currentUser) => {
	if (!currentUser || !Array.isArray(currentUser.userRoles)) return false;
	const { userRoles } = currentUser;
	if (userRoles.includes('admin')) return true;
	return false;
};

export const numberWithCommas = (x) => x.toLocaleString();

export const stripeApiInstance = axios.create({
	baseURL: 'https://us-central1-shop-app-a3418.cloudfunctions.net/stripe-api',
});

// export const stripeApiInstance = axios.create({
// 	baseURL: 'http://localhost:5001/shop-app-a3418/us-central1/api',
// });

export const categoriesValues = {
	'Show all': { name: 'Show all', value: '' },
	Knitted: { value: 'knitted', name: 'Knitted' },
	Chevron: { value: 'chevron', name: 'Chevron' },
	Moroccan: { value: 'moroccan', name: 'Moroccan' },
	Woven: { value: 'woven', name: 'Woven' },
	Cube: { value: 'cube', name: 'Cube' },
	Fur: { value: 'fur', name: 'Fur' },
	Patchwork: { value: 'patchwork', name: 'Patchwork' },
	Leather: { value: 'leather', name: 'Leather' },
	Round: { value: 'round', name: 'Round' },
	Ottoman: { value: 'ottoman', name: 'Ottoman' },
};
