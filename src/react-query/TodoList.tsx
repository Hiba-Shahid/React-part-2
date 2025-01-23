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

    const [todos, setTodos] = useState<Todo[]>([]);
    const [error, setError] = useState('');

    useEffect(() =>{
        axios
        .get('https://jsonplaceholder.typicode.com/todos')
        .then ((res)=> setTodos(res.data))
        .catch((error)=> setError(error));
    },[]);
    if (error) return <p>{error}</p>;

    return(
        <ul className="list-group">
      {todos?.map((todo) => (
        <li key={todo.id} className="list-group-item">
          {todo.title}
        </li>
      ))}
    </ul>
    );
}