import Image from "next/image";
import { Component } from "react";
import TodoImage from "../public/to-do-list.svg";

class TodoStylish extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      todos: [],
    };
  }

  submit = (e) => {
    e.preventDefault();
  };

  addTodo = (e) => {
    if (this.state.inputValue === "") {
      return false;
    } else {
      this.setState({
        todos: [...this.state.todos, this.state.inputValue],
        inputValue: "",
      });
    }
  };

  deleteTodo = (index) => {
    this.setState({
      todos: this.state.todos.filter((item, i) => i !== index),
    });
  };

  render() {
    return (
      <div>
        <head>
          <link
            rel="stylesheet"
            href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
            integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
            crossorigin="anonymous"
          />
        </head>
        <div className="main-div" onSubmit={this.submit}>
          <div className="child-div">
            <figure>
              <Image src={TodoImage} width={100} height={200} />
              <figcaption>Add Your List Here</figcaption>
            </figure>
            <div className="addItems">
              <input
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                  this.addTodo()
                  }
                }}
                type="text"
                placeholder="✍ Add Items..."
                value={this.state.inputValue}
                onChange={(e) => {
                  this.setState({ inputValue: e.target.value });
                }}
              />
              <i
                className="fa fa-plus add-btn"
                title="Add Item"
                onClick={() => {
                  this.addTodo();
                }}
              ></i>
            </div>
            <div className="showItems">
              {this.state.todos.map((item, index) => (
                <div className="eachItem" key={index}>
                  <h3>{item}</h3>
                  <i
                    className="far fa-trash-alt add-btn"
                    title="Delete Item"
                    onClick={() => {
                      this.deleteTodo(index);
                    }}
                  ></i>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoStylish;
