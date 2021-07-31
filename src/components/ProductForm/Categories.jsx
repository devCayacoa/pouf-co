import React from 'react';
import { Field } from 'react-final-form';
import { categoriesValues } from '../../utils';

export default function Categories() {
	const categories = { ...categoriesValues };
	delete categories['Show all'];

	return (
		<div className='categories-container'>
			<label className='label title-label'>Categories</label>
			{Object.keys(categories).map((key, pos) => {
				const { value, name } = categoriesValues[key];
				return (
					<div className='' id={'category-' + name}>
						<Field
							key={pos}
							name='categories'
							type='checkbox'
							value={value}
							component='input'
							className='checkbox mr-2'
						/>
						<label key={name} className='category-label' htmlFor={'categories'}>
							{name}
						</label>
					</div>
				);
			})}
		</div>
	);
}
