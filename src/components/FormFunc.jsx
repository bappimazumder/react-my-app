import { useEffect,useRef } from "react";
import Input from "./input";


export default function Form(){

    const inputRef = useRef(null);

    useEffect(() => {
        console.log(inputRef.current);
        inputRef.current.focus();

    },[]);
    return(
        <div>
            <p>
                <Input ref={inputRef} type="text" placeholder="enter something" />
            </p>
        </div>
    );
}