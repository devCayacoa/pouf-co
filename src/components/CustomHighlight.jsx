import { connectHighlight } from 'react-instantsearch-dom';

const Highlight = ({ highlight, attribute, hit }) => {
	const parsedHit = highlight({
		highlightProperty: '_highlightResult',
		attribute,
		hit,
	});

	return (
		<h3 className='font-bold text-sm ml-1 mt-2'>
			{parsedHit.map((part, index) =>
				part.isHighlighted ? (
					<mark key={index}>{part.value}</mark>
				) : (
					<span key={index}>{part.value}</span>
				)
			)}
		</h3>
	);
};

export const CustomHighlight = connectHighlight(Highlight);
