import React, { useReducer } from "react";
import TodoList from "./react-query/TodoList";
import PostList from "./react-query/PostList";
import TodoForm from "./react-query/TodoForm";
import Counter from "./state-management/counter/Counter";
import TaskList from "./state-management/tasks/TaskList";
import tasksReducer from "./state-management/tasks/TasksProvider";
import NavBar from "./state-management/NavBar";
import TasksProvider from "./state-management/tasks/TasksProvider";


function App() {

  return (

      <TasksProvider>
        <Counter/>
        <NavBar />
        <TaskList />
      </TasksProvider>

  );
}

export default App;
