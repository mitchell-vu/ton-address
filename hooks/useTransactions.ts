import { TransactionApiResponse } from '@/styles/api/tonhub';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useTransactions = (address: string, limit?: number) => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['transactions', address],
    queryFn: async () =>
      axios.request<TransactionApiResponse>({
        method: 'GET',
        url: 'https://sandbox.tonhubapi.com/getTransactions',
        params: {
          address,
          limit,
        },
      }),
    enabled: !!address,
    select: (res) => res.data.result,
  });

  return { data, isLoading, isError, isSuccess };
};

export default useTransactions;
