'use client';

import { useRouter } from 'next/navigation';
import { TonConnectButton, useTonAddress } from '@tonconnect/ui-react';
import { useEffect } from 'react';

const Home: React.FC = () => {
  const router = useRouter();
  const address = useTonAddress();

  if (address) {
    router.push('/');
  }

  return (
    <section className='flex h-full flex-col items-center justify-center gap-8 pt-8 md:pt-10'>
      <div className='flex flex-col items-center gap-2'>
        Please connect your wallet to continue
        <TonConnectButton />
      </div>
    </section>
  );
};

export default Home;
