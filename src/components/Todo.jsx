import { useState } from 'react';

function Todo(){
    const [todo,setTodo] = useState('');
    const [warning, setWarning] = useState(null);



    const handleInput = (e) => {
        const inputValue = e.target.value;
        const updatedWarning = inputValue.includes('.js') ? 'You need javaScript skill to complete the task. do you have it?' : null;

        setTodo(inputValue);
        setWarning(updatedWarning);
    };

    return(
        <div>
            <p>{todo}</p>
            <p>
                <textarea name="todo" value={todo} onChange={handleInput} />
            </p>
            <hr />
            <h1 >{warning || 'Good Choice!'}</h1>                
        </div>
    );

}

export default Todo;