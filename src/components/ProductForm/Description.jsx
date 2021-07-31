import React from 'react';
import { Field } from 'react-final-form';
import EditorComponent from '../CKEditorComponent';

export default function Description({ editedProduct }) {
	return (
		<div id='description' className=''>
			<label className='label title-label' htmlFor='description'>
				Description
			</label>
			<Field name='description'>
				{({ input, meta }) => (
					<EditorComponent
						input={input}
						meta={meta}
						initialState={editedProduct ? editedProduct.description : ''}
					/>
				)}
			</Field>
		</div>
	);
}
