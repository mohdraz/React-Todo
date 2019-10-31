import React from 'react';

import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

const todoList = [
  {
    id: 1,
    name: "Read React",
    completed: false
  },
  {
    id: 2,
    name: "Read Books",
    completed: false
  },
  {
    id: 3,
    name: "Go to work",
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      welecome: "Welcome to your Todo App!",
      todos: todoList
    }
  }

  addTodo = todoName => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: this.state.todos.length+1,
          name: todoName,
          completed: false
        }
      ]
    });

  };

  toggleCompletion = taskId => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === taskId) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    });
  };

  clearCompltedTask = () => {

    this.setState({
      todos: this.state.todos.filter(todo => {
        return !todo.completed
      })
    });
  }

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="container">
        <h2> {this.state.welecome} </h2>
        <TodoForm addTodo={this.addTodo} />
        <div>
          <TodoList
            todos={this.state.todos}
            toggleCompletion={this.toggleCompletion}
            clearCompltedTask={this.clearCompltedTask}
           />
        </div>
      </div>
    );
  }
}

export default App;
