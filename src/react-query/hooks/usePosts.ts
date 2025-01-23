import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

interface Post {
    id: number;
    title: string;
  }

  interface PostQuery {
    page: number;
    pageSize: number;
  }
  

const usePosts = (query: PostQuery) => useQuery<Post[], Error>({
    queryKey: ['posts', query],
    queryFn: () => axios
    .get('https://jsonplaceholder.typicode.com/posts', {
        params: {
            _start: (query.page - 1) * query.pageSize,
            _limit: query.pageSize
        }
    })
    .then ((res)=> res.data),
    staleTime: 1 * 60 * 1000, // 1m
    keepPreviousData: true
  
});

export default usePosts
