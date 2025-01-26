import React from 'react'
import TodoList from './react-query/TodoList'
import PostList from './react-query/PostList';
import TodoForm from './react-query/TodoForm';
import Counter from './state-management/Counter';
import TaskList from './state-management/TaskList'
import { useReducer } from 'react';
import tasksReducer from './state-management/reducers/tasksReducer';
import NavBar from './state-management/NavBar';
import HomePage from './state-management/Homepage';
import TaskContext from './state-management/contexts/tasksContext';


function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, []);
  return (

   <TaskContext.Provider value={{tasks, dispatch}}>
   <NavBar/>
   <TaskList/>
   </TaskContext.Provider>
   
)
}

export default App;
