import React, { useState } from 'react'

const Counter = ({onReset ,counts}) => {

    const [count, setcount] = useState(0);

    const increment= ()=>{
        setcount(count+1);
    }
    
    const decrement= ()=>{
        setcount(count-1);
    }
    const resetCount = () => setcount(0);

    React.useEffect(() => {
      
        resetCount(); 
      
    }, [onReset, counts]);

    React.useEffect(() => {
      
      setcount(counts);
    
  }, [ counts]);
  

  return (<>
    <div>Counter : {count}</div>
    <button onClick={()=> increment()}>Increment</button>
    <button onClick={()=> decrement()}>Decrement</button>
    </>)
};

export default Counter