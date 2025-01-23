import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

interface Post {
    id: number;
    title: string;
  }

const usePosts = (userId: number | undefined) => useQuery<Post[], Error>({
    queryKey:userId? ['users', userId, 'posts'] : ['posts'],
    queryFn: () => axios
    .get('https://jsonplaceholder.typicode.com/posts', {
        params: {
            userId
        }
    })
    .then ((res)=> res.data),
    staleTime: 1 * 60 * 1000, // 1m
  
});

export default usePosts
