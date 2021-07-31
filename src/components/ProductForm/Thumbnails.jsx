import React from 'react';
import { Field } from 'react-final-form';
import { FieldArray } from 'react-final-form-arrays';

export default function Thumbnails({ push, iname }) {
	return (
		<div className='' id='thumbnails'>
			<label className='label smaller-label'>Thumbnails</label>
			<div id='thumbnails' className=''>
				<FieldArray name={`${iname}.thumbnails`}>
					{({ fields }) =>
						fields.map((jname, index) => (
							<div key={jname}>
								<div className='label-delete-wrapper'>
									<label className='label smaller-label'>
										Link {index + 1}
									</label>
									<button
										type='button'
										onClick={() => fields.remove(index)}
										className='delete-form-btn'
									>
										Delete link {index + 1}
									</button>
								</div>
								<Field
									type='text'
									component='input'
									name={jname}
									placeholder='Paste or type a link to an image...'
									className='form-input'
								/>
							</div>
						))
					}
				</FieldArray>
				<button
					type='button'
					onClick={() => push(`${iname}.thumbnails`, undefined)}
					className='form-btn'
				>
					Add thumbnail
				</button>
			</div>
		</div>
	);
}
