import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

const useTodos = () => {
    const fetchTodos = async () => 
        axios
    .get('https://jsonplaceholder.typicode.com/todos')
    .then (res=> res.data);

    return useQuery<Todo[], Error>({
            queryKey:['todos'],
            queryFn: fetchTodos
        })

}

export default useTodos
