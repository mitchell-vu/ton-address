'use client';

import { Button } from '@nextui-org/button';
import { ArrowsCounterClockwise, ArrowUp, User } from '@phosphor-icons/react';
import { useRouter } from 'next/navigation';

const Home: React.FC = () => {
  const router = useRouter();

  return (
    <section className='flex flex-col items-center justify-center gap-4 py-8 md:py-10'>
      <div className='mb-8 flex flex-col gap-1 text-center'>
        <h1>Balance</h1>
        <div className='text-5xl font-semibold'>$200.00</div>
      </div>

      <div className='flex flex-row gap-3'>
        <Button
          isIconOnly
          variant='bordered'
          radius='full'
          size='lg'
          onClick={() => router.push('/address-book')}
        >
          <User size={20} weight='bold' />
        </Button>

        <Button isIconOnly variant='bordered' radius='full' size='lg'>
          <ArrowUp size={20} weight='bold' />
        </Button>

        <Button isIconOnly variant='bordered' radius='full' size='lg'>
          <ArrowsCounterClockwise size={20} weight='bold' />
        </Button>
      </div>
    </section>
  );
};

export default Home;
