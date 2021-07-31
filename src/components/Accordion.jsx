import { ChevronDownIcon } from '@heroicons/react/outline';
import PropTypes from 'prop-types';
import { useRef, useState } from 'react';

const Accordion = ({
	title,
	content,
	sectionClasses = '',
	rotateClasses = '',
	accordionClasses = '',
	iconClasses = '',
	contentClasses = '',
	activeContentClasses = '',
	textClasses = '',
	activeClasses = '',
	titleClasses = '',
	activeTitleClasses = '',
}) => {
	const [active, setActive] = useState('');
	const [height, setHeight] = useState('0px');
	const [rotate, setRotate] = useState('');
	const contentElement = useRef(null);

	const toggleAccordion = () => {
		setActive(active === '' ? 'active' : '');
		setHeight(
			active === 'active' ? '0px' : `${contentElement.current.scrollHeight}px`
		);
		setRotate(active === 'active' ? '' : 'rotate');
	};

	return (
		<div className={sectionClasses + ' accordion-section'}>
			<button
				onClick={toggleAccordion}
				className={`${accordionClasses} ${active && activeClasses} accordion`}
			>
				<h2 className={`${active && activeTitleClasses} ${titleClasses} `}>
					{title}
				</h2>

				<ChevronDownIcon
					className={`${iconClasses}  ${
						rotate !== '' && rotateClasses
					}  accordion-icon`}
				/>
			</button>
			<div
				ref={contentElement}
				style={{ maxHeight: height }}
				className={`${
					active && activeContentClasses
				} ${contentClasses} overflow-hidden transition-max-height`}
			>
				{typeof content === 'string' ? (
					<div
						className={textClasses}
						dangerouslySetInnerHTML={{ __html: content }}
					/>
				) : (
					<div className={textClasses}>{content}</div>
				)}
			</div>
		</div>
	);
};

Accordion.propTypes = {
	title: PropTypes.string,
	content: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};

export default Accordion;
