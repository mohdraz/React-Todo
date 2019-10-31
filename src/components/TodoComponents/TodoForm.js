import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state ={
            todoName: ""
        };
    }

    handleChange = e => {
        this.setState({
            todoName: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();

        if(this.state.todoName !== "") {
            this.props.addTodo(this.state.todoName);
        this.setState({todoName: ""});
        }
        

    }


    render () {
        return ( 
            <div className="todoForm"> 
            <form onSubmit={this.handleSubmit} >
                <input className="inputField" type="text" name="todo" 
                value={this.state.todoName}
                onChange={this.handleChange}
                />
                <button className="btn">Add Todo</button>
            </form>
            </div>
        );
    }
}

export default TodoForm;