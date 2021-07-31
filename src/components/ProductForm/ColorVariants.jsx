import React from 'react';
import { Field } from 'react-final-form';
import { FieldArray } from 'react-final-form-arrays';
import Thumbnails from './Thumbnails';

export default function ColorVariant({ push }) {
	return (
		<div id='' className='color-variants-container'>
			<label className='label title-label'>Color Variants</label>
			<FieldArray name='colors'>
				{({ fields }) =>
					fields.map((iname, index) => (
						<div key={iname}>
							<label className='label subtitle-label'>
								Color Variant {index + 1}
							</label>
							<button
								type='button'
								onClick={() => fields.remove(index)}
								className='delete-form-btn'
							>
								Delete color variant
							</button>
							<label className='label smaller-label' htmlFor={`${iname}.color`}>
								HEX Color
							</label>
							<Field
								name={`${iname}.color`}
								component='input'
								placeholder='HEX Color'
								className='form-input'
							/>
							<Thumbnails push={push} iname={iname} />
							<label className='label smaller-label' htmlFor={`${iname}.price`}>
								Price
							</label>
							<Field
								name={`${iname}.price`}
								type='number'
								component='input'
								step='0.01'
								placeholder='Type price...'
								className='form-input'
							/>
						</div>
					))
				}
			</FieldArray>

			<button
				className='form-btn mt-4'
				type='button'
				onClick={() => push('colors', undefined)}
			>
				Add color variant
			</button>
		</div>
	);
}
