import { useEffect,useRef,useState } from "react";

export default function Time(){
    const [date,setDate] = useState(new Date());
    let intervalRef = useRef();

    const tick = () => {
        setDate(new Date());
    };


    useEffect(() => {
        intervalRef.current = setInterval(tick,1000);
        return  () => {
            clearInterval(intervalRef.current);
        }
    },[]);

    return (
        <div>
            <p>Time: {date.toLocaleTimeString()}</p>
            <p><button onClick={() => clearInterval(intervalRef.current)}>Stop</button></p>
        </div>
    );
}