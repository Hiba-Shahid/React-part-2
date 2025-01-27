import { Dispatch } from "react";
import { Task, TaskAction } from "./TasksProvider";
import React from "react";

interface TaskContextType{
   tasks: Task[];
   dispatch: Dispatch<TaskAction>;
}

const TaskContext = React.createContext<TaskContextType>({} as TaskContextType);

export default TaskContext;