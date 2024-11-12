import React, { useState } from 'react';
import Counter from './Counter';

const CounterParent = () => {
    const [initialCount, setInitialCount] = useState(0);  
    const [resetCounter, setResetCounter] = useState(0);
    const [showCounters , setshowCounters] = useState(false);

   
    const handleInputChange = (e) => {
        setInitialCount(Number(e.target.value)); 
    };

   
    const handleSubmit = () => {
        setResetCounter(resetCounter +1);  
        setshowCounters (true);

    };

    return (
        <>
            <h1>Counter Kingdom</h1>
            <br /><br />
            {!showCounters && ( <>
                <input
                type="number"
                placeholder="Set initial counter value"
                style={{ width: "200px" }}
                value={initialCount}
                onChange={handleInputChange} />

            <button onClick={handleSubmit}>Submit</button> 
            </>  )}


            {showCounters && (
            <>  
            <br /><br />
            <button className="resetboth" onClick={() => setResetCounter(!resetCounter)}>Reset all Counters</button>
            
            <br /><br /><hr /><hr />

            <Counter onReset={resetCounter} counts={initialCount} /> 
            <Counter onReset={resetCounter} counts={initialCount} />  
            
            <hr /><hr />
            </>
          )}
        </>
    );
};

export default CounterParent;
