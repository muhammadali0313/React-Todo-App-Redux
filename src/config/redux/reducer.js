import { ADD_TODO, DELETE_TODO, EDIT_TODO } from './action'; // Only import action types

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case DELETE_TODO:
      return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) };
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id ? { ...todo, text: action.payload.newText } : todo
        ),
      };
    default:
      return state;
  }
};

export default todoReducer;
