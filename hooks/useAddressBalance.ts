import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useAddressInfomation = (address: string) => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['getAddressBalance', address],
    queryFn: async () =>
      axios.request({
        method: 'GET',
        url: 'https://sandbox.tonhubapi.com/getAddressBalance',
        params: {
          address,
        },
      }),
    enabled: !!address,
    select: (res) => res.data,
  });

  return { data, isLoading, isError, isSuccess };
};

export default useAddressInfomation;
