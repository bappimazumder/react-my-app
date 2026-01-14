import {useReducer, useEffect} from 'react';

const initialState = {
    loading: true,
    error: '',
    post: {},
};

const reducer = (state, action) => {
    switch(action.type){
        case 'SUCCESS' : 
            return {
                loading: false,
                post: action.result,
                error: '',
            };
        case 'ERROR': 
            return{
                loading: false,
                post: action.result,
                error: 'There was a problem fetching'
            };
        default:
            return state;
    }
};

export default function GetPost2(){
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then((data) => {
               dispatch({type: 'SUCCESS', result: data});
            })
            .catch(() => {
                dispatch({type: 'ERROR'});
            });
    },[]);

     return(
        <div className="post-container">
            { state.loading ? 'Loading......' : state.post.title }
            { state.error || null}
        </div>
    );

}