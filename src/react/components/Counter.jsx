import React, { useState } from 'react';

const Counter = () => {
    const [ count, setCount ] = useState(0);

    return (
        <div className="counter">
            <input type="count" value={count} readOnly />
            <button type="button" onClick={() => setCount(count + 1)}>+</button>
            <button type="button" onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
}

export default Counter;
