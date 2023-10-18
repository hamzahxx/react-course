import React from "react";

export default function TodoInput() {
  return (
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Work to be done"
        />
        <button className="btn custom-nav-button">
          Pass it
        </button>
      </div>
  );
}
