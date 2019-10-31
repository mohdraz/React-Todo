import React from "react";

const Todo = props => {

    let todoItemClass = "todo";
    if(props.todo.completed) {
        todoItemClass = todoItemClass + " taskCompleted";
    }

    const handleClick = e => {
        e.preventDefault();
        props.toggleCompletion(props.todo.id);
    }

    return (
        <div onClick={handleClick} className={todoItemClass} >
            <p> {props.todo.name} </p>
        </div>
    );
}

export default Todo;