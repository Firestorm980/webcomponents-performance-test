import React from 'react';
import Counter from './Counter';

const App = () => {

    const counters = [];

    for ( let index = 0; index < 1000; index++ ) {
        counters.push(<Counter />);
    }

    return (
        <div className="app">
            {counters}
        </div>
    )
}

export default App;