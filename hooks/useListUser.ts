import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import type { IUser } from '../types';

const useListUser = () => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['users'],
    queryFn: async () =>
      axios.request({
        method: 'GET',
        url: 'http://localhost:8000/v1/users',
      }),
    select: (res) => res.data.map((user: { id: string; name: string; walletAddress: string; }) => ({
      id: user.id,
      name: user.name,
      address: user.walletAddress,
    })) as IUser[],
  });

  return { data, isLoading, isError, isSuccess };
};

export default useListUser;
