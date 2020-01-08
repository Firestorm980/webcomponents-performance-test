import React from 'react';
import Counter from './Counter';

/**
 * Component
 */
const App = () => {

	const counters = [];

	for ( let index = 0; 1000 > index; index++ ) {
		counters.push( <Counter key={index} /> );
	}

	return (
		<div className="app">
			{counters}
		</div>
	);
};

export default App;
