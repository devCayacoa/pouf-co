import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function EditorComponent({ input, meta, initialState }) {
	const [data, setData] = useState('');
	const { pathname } = useLocation();
	const edit = pathname.includes('edit');
	const onEditorChange = (e, editor) => {
		setData(editor.getData());
		return input.onChange(editor.getData());
	};

	useEffect(() => {
		if (initialState !== '') {
			setData(initialState);
		}
	}, [initialState]);

	return (
		<CKEditor
			editor={ClassicEditor}
			config={{ extraAllowedContent: 'dl dt dd' }}
			name={input.name}
			data={data}
			onChange={onEditorChange}
		/>
	);
}

export default EditorComponent;
