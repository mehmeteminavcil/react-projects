import React from "react";
import { useState } from "react";
import "./header.css";

function Header({ handleAddTask }) {
  const [inputText, setInputText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    handleAddTask(inputText);
    setInputText("")
  }


  function onChangeText(event) {
    setInputText(event.target.value);
  }

 
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Android_O_Preview_Logo.png/1024px-Android_O_Preview_Logo.png"
          alt=""
        />
        <h1>TODO</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add new task"
          value={inputText}
          onChange={onChangeText}
        />
        <button>
          Create <span>+</span>
        </button>
      </form>
    </div>
  );
}

export default Header;
