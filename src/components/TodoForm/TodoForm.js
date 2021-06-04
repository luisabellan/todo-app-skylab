import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
  addItem: PropTypes.func,
  clearCompleted: PropTypes.func
};

export default function TodoForm(props) {
  const initialState = {
    todoItem1: ''
  };
  const [state, setState] = useState(initialState);

  const handleChanges = (e) => {
    // update state with each keystroke
    // console.log(e)
    setState({ [e.target.name]: e.target.value });
    // console.log(state);
  };

  // class property to submit form
  const addTodo = (e) => {
    e.preventDefault();
    //console.log(props);
    props.addItem(e, state.todoItem1);
    setState({ todoItem1: '' });
  };

  // console.log('rendering form', state.todoItem);

  return (
    <div data-testid="form">
      <form onSubmit={addTodo}>
        <input
          type="text"
          className="input"
          data-testid="todo-input"
          value={state.todoItem1}
          placeholder="New Task"
          name="todoItem1"
          onChange={handleChanges}
        ></input>
        <div id="buttons">

          <div id="button-left">
            <button className="add-to-do-btn" data-testid="add-todo-button">
              <span>Add</span>
            </button>

          </div>

          <div id="button-right">

            <button className="clear-btn" onClick={props.clearCompleted}>
              <span>Clean</span>
            </button>

          </div>


        </div>
      </form>
    </div>
  );
}
