import React from 'react';


export default class Form extends React.Component {
    state = {
        title: 'Javascript',
        text: 'JavaScript is great',
        library: 'React',
        isCheck: true
    };

    handleChange = (e) => {
        console.log(e.target.value);
        console.log(e.target.type);
        if(e.target.type === 'text'){
            this.setState({
                title: e.target.value             
            });

        }else if(e.target.type === 'textarea'){
            this.setState({
                text: e.target.value
            });
        }else if(e.target.type === 'select-one'){
            this.setState({
                library: e.target.value
            });
        }else if(e.target.type === 'checkbox'){
            this.setState({
                isCheck: e.target.checked
            });
        }else{
            console.log("Nothing here");
        }
        
    }

    submitHandler = (e) => {
        const {title,text,library,isCheck} = this.state;
        e.preventDefault();
        console.log(title, text, library, isCheck);
    }
    
    render() {
        const { title,text,library,isCheck} = this.state;
        return(        
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="text"  placeholder="Enter Value" value ={title} onChange={this.handleChange} />
                    <p>{title}</p>
                    <br/>
                    <br/>

                    <textarea name="text" value={text} onChange={this.handleChange}/>

                    <br/>
                    <br/>

                    <select value={library} onChange={this.handleChange}>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                    </select>
                    
                    <br/>
                    <br/>

                    <input type='checkbox' checked={isCheck} onChange={this.handleChange} />
                    
                    <br/>
                    <br/>

                    <input type='submit' value="submit"/>


                </form>
            </div>
        
        );
    }
}