'use client';

import { formatCurrency, nanoToNumber } from '@/utils/number';
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
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/dropdown';
import { TonConnectButton, useTonAddress } from '@tonconnect/ui-react';
import { useEffect } from 'react';
import { useAddressBalance } from '@/hooks';
import { Skeleton } from '@nextui-org/skeleton';

const MOCK_CRYPTO = [
  {
    name: 'Bitcoin',
    abbreviation: 'BTC',
    imageUrl: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
    price: 63185.84,
    trend: 0.3,
  },
  {
    name: 'Ethereum',
    abbreviation: 'ETH',
    imageUrl: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
    price: 3046.16,
    trend: 0.2,
  },
  {
    name: 'Tether',
    abbreviation: 'USDT',
    imageUrl: 'https://cryptologos.cc/logos/tether-usdt-logo.png?v=002',
    price: 0.9995,
    trend: -0.08,
  },
  {
    name: 'TONCOIN',
    abbreviation: 'TON',
    imageUrl: 'https://cryptologos.cc/logos/toncoin-ton-logo.png',
    price: 6.9,
    trend: 1.3,
  },
];

const Home: React.FC = () => {
  const router = useRouter();
  const address = useTonAddress();

  const { data, isLoading, isSuccess } = useAddressBalance(address);

  useEffect(() => {
    if (!address) {
      router.push('/connect');
    }
  }, [address, router]);

  return (
    <section className='flex h-full flex-col items-center justify-center gap-8 pt-8 md:pt-10'>
      <TonConnectButton />

      <div className='mb-4 flex flex-col items-center gap-3 text-center'>
        <h1>Balance</h1>
        <Dropdown>
          <DropdownTrigger>
            <Button variant='bordered' className='w-auto capitalize' size='sm' radius='full'>
              TON
            </Button>
          </DropdownTrigger>
          <DropdownMenu disallowEmptySelection selectionMode='single'>
            <DropdownItem key='text'>TON</DropdownItem>
            <DropdownItem key='number'>BTC</DropdownItem>
            <DropdownItem key='date'>XRP</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <div className='text-5xl font-semibold'>
          {!isSuccess && <Skeleton className='h-10 w-48 rounded-lg' />}
          {isSuccess && nanoToNumber(data)}
        </div>
      </div>

      <div className='grid w-full max-w-xl grid-cols-2 gap-2'>
        {[
          {
            icon: <User size={24} weight='bold' />,
            label: 'Contact',
            onClick: () => router.push('/contact'),
          },
          {
            icon: <ArrowUp size={24} weight='bold' />,
            label: 'Send',
            onClick: () => router.push('/transfer'),
          },
          {
            icon: <ArrowDown size={24} weight='bold' />,
            label: 'Receive',
            onClick: () => router.push('/receive'),
          },
          {
            icon: <ArrowsCounterClockwise size={24} weight='bold' />,
            label: 'Transaction',
            onClick: () => router.push('/transactions'),
          },
        ].map(({ icon, label, onClick }, index) => (
          <Button
            key={index}
            variant='bordered'
            size='lg'
            onClick={onClick}
            className='flex h-auto flex-col py-6'
          >
            {icon}

            <span className='text-sm font-semibold'>{label}</span>
          </Button>
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
