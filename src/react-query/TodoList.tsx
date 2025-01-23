import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
import { useQuery } from "@tanstack/react-query";

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

const TodoList = () =>{
    const fetchTodos = async () => 
        axios
    .get('https://jsonplaceholder.typicode.com/todos')
    .then (res=> res.data);


    const {data: todos} = useQuery({
        queryKey:['todos'],
        queryFn: fetchTodos
    })

 
   // if (error) return <p>{error}</p>;

    return(
        <ul className="list-group">
        {todos?.map((todo: Todo) => (
          <li key={todo.id} className="list-group-item">
            {todo.title}
          </li>
        ))}
          </ul>
    );
}