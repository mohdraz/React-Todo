// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";

const TodoList = props => {
    return (
        <div className="todoListContainer">
        <div className="todoList"> 
            {props.todos.map(todo => (
                <Todo
                    key={todo.id}
                    todo={todo}
                    toggleCompletion={props.toggleCompletion}
                    />
             ) )}
</div>
             <button className="btn clear-btn" onClick={props.clearCompltedTask} >
                 Clear Completed Tasks
             </button>
        </div>
    );
}

export default TodoList;
