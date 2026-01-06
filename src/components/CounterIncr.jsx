import { useState } from 'react';

function Counter(){
    const [count, setCount] = useState(0);

    let i= 0;
    const addFive = () => {
        while(i< 5){
            setCount((prevState)=>  prevState+1);
            i +=1;
        }

    }

    return (
        <div>
            <p>{count}</p>
            <p>
                <button type="button" onClick={() => setCount((prevState) => prevState + 1)}>
                  Add1
                </button>
                <button type="button" onClick={addFive}>
                  Add2
                </button>
            </p>
        </div>    
    );
}

export default Counter;