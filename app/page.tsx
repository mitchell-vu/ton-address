'use client';

import { formatCurrency, humanizeNumber } from '@/utils/number';
import { Button } from '@nextui-org/button';
import { Card, CardBody } from '@nextui-org/card';
import {
  ArrowDown,
  ArrowDownLeft,
  ArrowsCounterClockwise,
  ArrowUp,
  ArrowUpRight,
  Minus,
  User,
} from '@phosphor-icons/react';
import clsx from 'clsx';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const MOCK_CRYPTO = [
  {
    name: 'Bitcoin',
    abbreviation: 'BTC',
    imageUrl: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
    price: 200000,
    trend: -0.09,
  },
  {
    name: 'Ethereum',
    abbreviation: 'ETH',
    imageUrl: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
    price: 200000,
    trend: 1.2,
  },
  {
    name: 'Ripple',
    abbreviation: 'XRP',
    imageUrl: 'https://cryptologos.cc/logos/xrp-xrp-logo.png',
    price: 200000,
    trend: 0,
  },
  {
    name: 'TONCOIN',
    abbreviation: 'TON',
    imageUrl: 'https://cryptologos.cc/logos/toncoin-ton-logo.png',
    price: 200000,
    trend: -0.09,
  },
];

const Home: React.FC = () => {
  const router = useRouter();

  return (
    <section className='flex h-full flex-col items-center justify-center gap-8 pt-8 md:pt-10'>
      <div className='mb-4 flex flex-col gap-1 text-center'>
        <h1>Balance</h1>
        <div className='text-5xl font-semibold'>$200.00</div>
      </div>

      <div className='flex flex-row gap-6'>
        {[
          {
            icon: <User size={20} weight='bold' />,
            label: 'Contact',
            onClick: () => router.push('/contact'),
          },
          {
            icon: <ArrowUp size={20} weight='bold' />,
            label: 'Send',
            onClick: () => router.push('/send'),
          },
          {
            icon: <ArrowDown size={20} weight='bold' />,
            label: 'Receive',
            onClick: () => router.push('/receive'),
          },
          {
            icon: <ArrowsCounterClockwise size={20} weight='bold' />,
            label: 'Purchase',
            onClick: () => router.push('/transactions'),
          },
        ].map(({ icon, label, onClick }, index) => (
          <div key={index} className='flex w-12 flex-col items-center gap-2' onClick={onClick}>
            <Button isIconOnly variant='bordered' radius='full' size='lg' onClick={onClick}>
              {icon}
            </Button>

            <span className='text-sm font-semibold'>{label}</span>
          </div>
        ))}
      </div>

      <Card className='w-full max-w-xl rounded-3xl '>
        <CardBody className='gap-3'>
          {MOCK_CRYPTO.map(({ name, abbreviation, price, trend, imageUrl }, index) => (
            <div
              key={index}
              className='flex flex-row items-center gap-2 rounded-2xl border border-zinc-800 p-4'
            >
              <Image src={imageUrl} width={40} height={40} alt={name} />

              <div className='flex grow flex-col items-start justify-between gap-1 sm:flex-row sm:items-center sm:gap-2'>
                <div className='flex flex-row items-center gap-2 sm:flex-col sm:items-start'>
                  <div className='font-semibold'>{name}</div>
                  <div className='text-xs text-gray-500'>{abbreviation}</div>
                </div>

                <div className='flex flex-row items-center gap-2 sm:flex-col sm:items-end'>
                  <div className='font-semibold'>{formatCurrency(price) ?? '--'}</div>
                  <div
                    className={clsx('flex flex-row items-center gap-1 text-xs', {
                      'text-emerald-400': trend > 0,
                      'text-rose-400': trend < 0,
                      'text-neutral-500': trend === 0,
                    })}
                  >
                    {trend > 0 && <ArrowUpRight size={12} />}
                    {trend < 0 && <ArrowDownLeft size={12} />}
                    {trend === 0 && <Minus size={12} />}

                    {trend}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CardBody>
      </Card>
    </section>
  );
};

export default Home;
