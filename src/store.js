import { createContext } from 'react';

export const Context = createContext();
export const initialState = {
	isNotCheckout: true,
	products: [
		{
			id: 'some-product-id-20154adf',
			imgs: [
				'https://via.placeholder.com/400/FFFF00/000000?Text=PoufCo',
				'https://via.placeholder.com/400/FF00FF/000000?Text=PoufCo',
				'https://via.placeholder.com/400/00FF00/000000?Text=PoufCo',
				'https://via.placeholder.com/400/0000FF/000000?Text=PoufCo',
			],
			name: 'Something',
			brand: 'Reel Nice',
			desc: 'Something reel reel nice',
			price: '20.00',
			tags: [''],
		},
		{
			id: '20154adfa',
			imgs: [
				'https://via.placeholder.com/400/0FF/000000?Text=PoufCo',
				'https://via.placeholder.com/400/FFFF00/000000?Text=PoufCo',
				'https://via.placeholder.com/400/FFFF00/000000?Text=PoufCo',
				'https://via.placeholder.com/400/FFFF00/000000?Text=PoufCo',
			],
			name: 'Something',
			brand: 'Reel Nice',
			desc: 'Something reel reel nice',
			price: '20.00',
			tags: [''],
		},
		{
			id: 'some-product-id-20154adfb',
			imgs: [
				'https://via.placeholder.com/400/FFFF00/000000?Text=PoufCo',
				'https://via.placeholder.com/400/FFFF00/000000?Text=PoufCo',
				'https://via.placeholder.com/400/FFFF00/000000?Text=PoufCo',
				'https://via.placeholder.com/400/FFFF00/000000?Text=PoufCo',
			],
			name: 'Something',
			brand: 'Reel Nice',
			desc: 'Something reel reel nice',
			price: '20.00',
			tags: [''],
		},
		{
			id: 'some-product-id-20154adfc',
			imgs: [
				'https://via.placeholder.com/400/FFFF00/000000?Text=PoufCo',
				'https://via.placeholder.com/400/FFFF00/000000?Text=PoufCo',
				'https://via.placeholder.com/400/FFFF00/000000?Text=PoufCo',
				'https://via.placeholder.com/400/FFFF00/000000?Text=PoufCo',
			],
			name: 'Something',
			brand: 'Reel Nice',
			desc: 'Something reel reel nice',
			price: '20.00',
			tags: [''],
		},
		{
			id: 'some-product-id-20154adfd',
			imgs: [
				'https://via.placeholder.com/400/FFFF00/000000?Text=PoufCo',
				'https://via.placeholder.com/400/FFFF00/000000?Text=PoufCo',
				'https://via.placeholder.com/400/FFFF00/000000?Text=PoufCo',
				'https://via.placeholder.com/400/FFFF00/000000?Text=PoufCo',
			],
			name: 'Something',
			brand: 'Reel Nice',
			desc: 'Something reel reel nice',
			price: '20.00',
			tags: [''],
		},
		{
			id: 'some-product-id-20154adfe',
			imgs: [
				'https://via.placeholder.com/400/FFFF00/000000?Text=PoufCo',
				'https://via.placeholder.com/400/FFFF00/000000?Text=PoufCo',
				'https://via.placeholder.com/400/FFFF00/000000?Text=PoufCo',
				'https://via.placeholder.com/400/FFFF00/000000?Text=PoufCo',
			],
			name: 'Something',
			brand: 'Reel Nice',
			desc: 'Something reel reel nice',
			price: '20.00',
			tags: [''],
		},
		{
			id: 'some-product-id-20154adff',
			imgs: [
				'https://via.placeholder.com/400/FFFF00/000000?Text=PoufCo',
				'https://via.placeholder.com/400/FFFF00/000000?Text=PoufCo',
				'https://via.placeholder.com/400/FFFF00/000000?Text=PoufCo',
				'https://via.placeholder.com/400/FFFF00/000000?Text=PoufCo',
			],
			name: 'Something',
			brand: 'Reel Nice',
			desc: 'Something reel reel nice',
			price: '20.00',
			tags: [''],
		},
	],
};
export const reducer = (state, { type, payload }) => {
	switch (type) {
		default:
			return state;
	}
};
