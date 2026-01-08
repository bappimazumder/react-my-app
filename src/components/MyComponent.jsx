import { useState } from "react";
import { useEffect } from "react";  

export default function MyComponent(){

    const [count,setCount] = useState(0);
    const [text,setText] = useState('');
    const [date,setDate] = useState(new Date());

    const addClick = () => {
        setCount((prevCount) => prevCount + 1);
    }

    const tick = () => {
        setDate(new Date());
    }

    useEffect(() => {
        console.log('updating document title');
        document.title = `Clicked ${count} times`; 
    },[count]);

    useEffect(() => {
        console.log('updating time');
        const interval = setInterval(tick,1000); 

        // clean up - stop the timer
        return () => {
            console.log('component unmounted');
            clearInterval(interval);
        }        
    });


    return (
        <div>
            <p>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            </p>
            {/* <p>Time: {date.toLocaleTimeString()}</p> */}
            <p>
                <button type="button" onClick={addClick}>Click</button>
            </p>
        </div>
    );
}