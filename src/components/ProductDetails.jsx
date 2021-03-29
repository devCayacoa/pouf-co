import React, { useState } from 'react';

export const ProductDetails = ({ productData }) => {
	const { imgs } = productData;
	const [img, setImg] = useState(0);

	return (
		<div id='product-details-container' className='p-4 '>
			<div id='product-images' className='flex justify-between'>
				<button
					id='prev'
					className=''
					onClick={() => {
						if (img > 0) {
							setImg(img - 1);
						}
					}}
					disabled={img == 0}>
					/<br />\
				</button>
				<img src={imgs[img]} alt='' id='big-image' className='w-11/12' />
				<button
					id='prev'
					className=''
					onClick={() => {
						if (img < imgs.length - 1) {
							setImg(img + 1);
						}
					}}
					disabled={img == imgs.length - 1}>
					\<br />/
				</button>
			</div>
			<h1 id='product-name' className='text-2xl font-logo italic'>
				{productData.name}
			</h1>
			<h2 id='product-brand' className='text-lg font-logo leading-3'>
				{productData.brand}
			</h2>
			<br />
			<h1 id='product-price' className='text-3xl font-bold leading-5'>
				${productData.price}
			</h1>
		</div>
	);
};
