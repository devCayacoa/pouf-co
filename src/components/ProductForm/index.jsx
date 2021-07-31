import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { Form, FormSpy } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import {
	setEditedProduct,
	setProduct,
	updateFormState,
} from '../../redux/Products/products.actions';

import './ProductForm.styles.css';

import Tags from './Tags';
import ColorVariants from './ColorVariants';
import Categories from './Categories';
import Description from './Description';

// const mapState = ({ productsData }) => ({
// 	editedProduct: productsData.editedProduct,
// 	formValues: productsData.form.values,
// });

const ProductForm = ({ submitFunction, editedProduct }) => {
	const dispatch = useDispatch();

	const [tag, setTag] = useState('');

	const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

	const onSubmit = async (values) => {
		await sleep(300);
		// window.alert(JSON.stringify(values, null, 2));
		console.log('Form says: ', JSON.stringify(values, null, 2));
		// submitFunction(editedProduct);
	};

	useEffect(() => {
		return () => {
			dispatch(setEditedProduct({}));
			dispatch(setProduct({}));
		};
	}, [dispatch]);

	return (
		<div className=''>
			<Form
				onSubmit={onSubmit}
				initialValues={editedProduct}
				subscription={{ submitting: true, pristine: true }}
				mutators={{ ...arrayMutators }}
			>
				{({
					handleSubmit,
					form: {
						mutators: { push, pop },
					},
					submitting,
					pristine,
				}) => (
					<form onSubmit={handleSubmit}>
						<FormSpy
							onChange={(state) => {
								if (editedProduct !== state.values)
									dispatch(setEditedProduct(state.values));
								dispatch(updateFormState(state));
							}}
						/>

						<Tags push={push} />
						<ColorVariants push={push} />
						<Categories />
						<Description editedProduct={editedProduct} />
						<button
							type='submit'
							className='form-btn'
							onClick={() => {
								if (!pristine) console.log('No changes have been made.');
							}}
							disabled={pristine || submitting}
						>
							Done
						</button>
					</form>
				)}
			</Form>
		</div>
	);
};

export default ProductForm;
