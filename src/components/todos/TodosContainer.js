import React, { Component } from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

class TodosContainer extends Component {
  renderTodos = () => {
    return this.props.todos.map((todo, id) => <Todo key={id} text={todo} />);
  };

  render() {
    return <ol>{this.renderTodos()}</ol>;
  }
}

export default connect((state) => ({ todos: state.todos }))(TodosContainer);
