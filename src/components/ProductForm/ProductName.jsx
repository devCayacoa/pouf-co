import React from 'react';
import { Field } from 'react-final-form';

export default function ProductName() {
	return (
		<div className='product-name'>
			<label className='label title-label' htmlFor='name'>
				Product name
			</label>
			<Field
				type='text'
				name='name'
				placeholder='Type product name...'
				component='input'
				className='form-input'
			/>
		</div>
	);
}
