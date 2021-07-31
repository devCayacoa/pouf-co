import React, { createElement, useEffect, Fragment, useRef } from 'react';
import { render } from 'react-dom';

export default function Autocomplete(props) {
	const containerRef = useRef(null);
	useEffect(() => {
		if (!containerRef.current) return undefined;
		const search = Autocomplete({
			container: containerRef.current,
			renderer: { createElement, Fragment },
			render({ children }, root) {
				render(children, root);
			},
			...props,
		});
		return () => {
			search.destroy();
		};
	}, [props]);
	return <div ref={containerRef} />;
}
