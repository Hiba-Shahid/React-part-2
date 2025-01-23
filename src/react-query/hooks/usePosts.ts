import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useInfiniteQuery, UseInfiniteQueryResult } from '@tanstack/react-query';
  

interface Post {
    id: number;
    title: string;
}

interface PostQuery {
    pageSize: number;
}

interface QueryParams {
    _start: number;
    _limit: number;
}

const usePosts = (query: PostQuery): UseInfiniteQueryResult<Post[], Error> => useInfiniteQuery<Post[], Error>({
    queryKey: ['posts', query],
    queryFn: ({ pageParam = 1}) => axios
        .get<Post[]>('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _start: (pageParam - 1) * query.pageSize,
                _limit: query.pageSize
            } as QueryParams
        })
        .then((res) => res.data),
    staleTime: 1 * 60 * 1000, // 1m
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
        return lastPage.length > 0 ? allPages.length + 1 : undefined;
    }
});

export default usePosts
