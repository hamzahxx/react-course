import React, { useState } from "react";

export default function TodoInput() {
  return (
    <>
      <div className="input-group mb-3">
        <input
          id="InPut"
          type="text"
          className="form-control"
          placeholder="Work to be done"
          required
        />
        <button /* onClick={} */ className="btn custom-nav-button">
          Pass it
        </button>
      </div>
      <div>
        <ul id="todo-list"></ul>
      </div>
    </>
  );
}

// let liElements = document.querySelectorAll("li.todo-task")
// let num = 1
// function AddTodo() {
//   const input = document.getElementById("InPut").value;
//   const listNode = document.createElement("li");
//   listNode.innerHTML = input;
//   listNode.setAttribute("id", `todo-task-${num}`);
//   listNode.setAttribute("class", "todo-task")
//   document.getElementById("todo-list").appendChild(listNode);
//   num++;
// }
