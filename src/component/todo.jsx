import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, editTodo } from '../config/redux/action';
import '../styling/todo.css';

const Todo = () => {
  const [input, setInput] = useState('');
  const [editId, setEditId] = useState(null);
  const todos = useSelector(state => state.todos); // Ensure this is correct
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (input) {
      dispatch(addTodo({ id: Date.now(), text: input }));
      setInput('');
    }
  };

  const handleEditTodo = (id, text) => {
    setEditId(id);
    setInput(text);
  };

  const handleSaveEdit = () => {
    if (input) {
      dispatch(editTodo(editId, input));
      setInput('');
      setEditId(null);
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="todo-container">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add or edit a todo"
      />
      <button onClick={editId ? handleSaveEdit : handleAddTodo}>
        {editId ? 'Save' : 'Add'}
      </button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <div>
              <button className="edit"onClick={() => handleEditTodo(todo.id, todo.text)}>Edit</button>
              <button className="delete" onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
