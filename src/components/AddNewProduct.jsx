import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { addNewProductStart } from '../redux/Products/products.actions';
import { Button } from './forms/Button';
import { FormInput } from './forms/FormInput';
import Select from './forms/Select';
import { TextArea } from './forms/TextArea';

export const AddNewProduct = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const [category, setProductCategory] = useState('men');
	const [name, setName] = useState('');
	const [thumbnail, setThumbnail] = useState('');
	const [tags, setTags] = useState('');
	const [price, setPrice] = useState(0);

	const resetForm = () => {
		setName('');
		setThumbnail('');
		setTags('');
		setPrice(0);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(
			addNewProductStart({
				name: name.trim(),
				thumbnail: thumbnail.split('\n').map((elem) => elem.trim()),
				price,
				category: category.trim(),
				tags: tags.split(',').map((elem) => elem.trim()),
			})
		);

		resetForm();
		history.goBack();
	};

	return (
		<div className='' id='add-new'>
			Add new product
			<form onSubmit={handleSubmit} className='' id=''>
				<Select
					options={[
						{ value: 'men', name: 'Men' },
						{ value: 'women', name: 'Women' },
					]}
					defaultValue={category}
					onChange={(e) => setProductCategory(e.target.value)}
					value={thumbnail}
					required
				/>
				<FormInput
					type='text'
					name='name'
					value={name}
					placeholder={'Name'}
					onChange={(e) => {
						setName(e.target.value);
					}}
					required
				/>
				<TextArea
					name='thumbnails'
					placeholder='Insert the links separated by an end of line...'
					rows={5}
					value={thumbnail}
					onChange={(e) => setThumbnail(e.target.value)}
					required
				/>
				<FormInput
					type='text'
					name='tags'
					placeholder='Insert the tags separated by a comma...'
					value={tags}
					onChange={(e) => setTags(e.target.value)}
					required
				/>
				<FormInput
					type='number'
					name='price'
					value={price}
					placeholder={0}
					onChange={(e) => setPrice(e.target.value)}
					required
				/>
				<Button type={'submit'}>Add</Button>
			</form>{' '}
		</div>
	);
};