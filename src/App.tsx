import React, { useReducer } from "react";
import TodoList from "./react-query/TodoList";
import PostList from "./react-query/PostList";
import TodoForm from "./react-query/TodoForm";
import Counter from "./state-management/counter/Counter";
import TaskList from "./state-management/tasks/TaskList";
import tasksReducer from "./state-management/tasks/TasksProvider";
import NavBar from "./state-management/NavBar";
import TasksProvider from "./state-management/tasks/TasksProvider";
import authReducer from "./state-management/auth/AuthProvider";
import AuthContext from "./state-management/auth/authContext";
import AuthProvider from "./state-management/auth/AuthProvider";


function App() {

  return (
    <AuthProvider>
      <TasksProvider>
        <NavBar />
        <TaskList />
      </TasksProvider>
    </AuthProvider>
  );
}

export default App;
