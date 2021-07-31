import { XIcon } from '@heroicons/react/outline';
import React from 'react';
import { Field } from 'react-final-form';
import { FieldArray } from 'react-final-form-arrays';

export default function Tags({ push }) {
	return (
		<div className='tags-container'>
			<FieldArray name='tags'>
				{({ fields }) =>
					fields.map((name, index) => (
						<Field key={name} name={name}>
							{({ input: { value }, meta }) => (
								<div className='tag'>
									<p className='tag-text'>{value}</p>
									<XIcon
										onClick={() => fields.remove(index)}
										className='tag-delete'
									/>
								</div>
							)}
						</Field>
					))
				}
			</FieldArray>
			<Field name='tag'>
				{({ input, meta }) => (
					<div className='w-full'>
						<input
							className='form-input'
							value={input.value}
							name={input.name}
							onChange={input.onChange}
							placeholder='Type a tag...'
						/>
						<button
							className='form-btn'
							onClick={() => {
								input.onChange('');
								push('tags', input.value);
							}}
						>
							Add tag
						</button>
					</div>
				)}
			</Field>
		</div>
	);
}
