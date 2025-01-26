import React, { ReactNode } from 'react'
import { useReducer } from 'react';
import tasksReducer from './reducers/tasksReducer';
import TaskContext from './contexts/tasksContext';

interface Props{
    children: ReactNode
}

const TasksProvider = ({children}: Props) => {
    const [tasks, dispatch] = useReducer(tasksReducer, []);
  return (
   <TaskContext.Provider value={{tasks, dispatch}}>
     {children}
   </TaskContext.Provider>
  )
}

export default TasksProvider
