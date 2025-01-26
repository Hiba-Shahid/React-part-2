import React, { useReducer } from "react";
import TodoList from "./react-query/TodoList";
import PostList from "./react-query/PostList";
import TodoForm from "./react-query/TodoForm";
import Counter from "./state-management/Counter";
import TaskList from "./state-management/TaskList";
import tasksReducer from "./state-management/reducers/tasksReducer";
import NavBar from "./state-management/NavBar";
import TasksProvider from "./state-management/TasksProvider";
import authReducer from "./state-management/reducers/authReducer";
import AuthContext from "./state-management/contexts/authContext";
import AuthProvider from "./state-management/AuthProvider";


function App() {
  const [tasks, tasksDispatch] = useReducer(tasksReducer, []);
  
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
