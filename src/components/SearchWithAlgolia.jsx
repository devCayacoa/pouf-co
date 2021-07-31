import React, { useEffect, useRef, useState } from 'react';

import { InstantSearch } from 'react-instantsearch-core';
import {
	ClearRefinements,
	CurrentRefinements,
	Hits,
	NumericMenu,
	Pagination,
	Panel,
	RangeInput,
	RefinementList,
	SearchBox,
	Stats,
} from 'react-instantsearch-dom';
import qs from 'qs';

import { useHistory, useLocation } from 'react-router';
import { searchClient } from '../algolia';
import { Product } from './Product';

const DEBOUNCE_TIME = 700;

const createURL = (state) => `?${qs.stringify(state)}`;

const searchStateToUrl = (location, searchState) =>
	searchState ? `${location.pathname}${createURL(searchState)}` : '';

const urlToSearchState = (location) => qs.parse(location.search.slice(1));

export default function SearchWithAlgolia() {
	const location = useLocation();
	const history = useHistory();

	const [searchState, setSearchState] = React.useState(
		urlToSearchState(location)
	);
	const setStateId = useRef();
	useEffect(() => {
		const nextSearchState = urlToSearchState(location);

		if (JSON.stringify(searchState) !== JSON.stringify(nextSearchState)) {
			setSearchState(nextSearchState);
		}

		// eslint-disable-next-line
	}, [location]);

	function onSearchStateChange(nextSearchState) {
		clearTimeout(setStateId.current);

		setStateId.current = setTimeout(() => {
			history.push(
				searchStateToUrl(location, nextSearchState),
				nextSearchState
			);
		}, DEBOUNCE_TIME);

		setSearchState(nextSearchState);
	}
	return (
		<InstantSearch
			searchClient={searchClient}
			indexName='products'
			searchState={searchState}
			onSearchStateChange={onSearchStateChange}
			createURL={createURL}
		>
			{/* <RefinementList attribute="brand" /> */}
			<SearchBox translations={{ placeholder: 'Search for products' }} />
			<Stats />
			<CurrentRefinements clearsQuery />
			<ClearRefinements />
			<Panel header='Categories'>
				<RefinementList
					attribute='categories'
					transformItems={(items) =>
						items.map((item) => ({
							...item,
							label: item.label[0].toUpperCase() + item.label.slice(1),
						}))
					}
				/>
			</Panel>
			{/* 
			<Panel header='Price'>
				<RangeInput
					attribute='colors.price'
					defaultRefinement={{ min: 0, max: 500 }}
				/>
				<NumericMenu
					attribute='colors.price'
					items={[
						{ label: '<= $10', end: 10 },
						{ label: '$10 - $50', start: 10, end: 50 },
						{ label: '$50 - $100', start: 50, end: 100 },
						{ label: '$100 - $200', start: 100, end: 200 },
						{ label: '>= $200', start: 200 },
					]}
				/>
			</Panel> */}
			<Hits
				hitComponent={({ hit }) => <Product key={hit.objectID} hit={hit} />}
			/>
			<Pagination showLast />
		</InstantSearch>
	);
}
