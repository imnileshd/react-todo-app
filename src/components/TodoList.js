import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    const { items, handleEdit, handleDelete } = this.props;
    return (
      <ul className="list-group my-2">
        {items.map((item) => {
          return (
            <TodoItem
              item={item}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          );
        })}
      </ul>
    );
  }
}
