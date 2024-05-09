'use client';

import { Avatar } from '@nextui-org/avatar';
import { Button } from '@nextui-org/button';
import { Card, CardBody } from '@nextui-org/card';
import { CaretLeft, MagnifyingGlass } from '@phosphor-icons/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { Divider } from '@nextui-org/divider';
import Link from 'next/link';
import { Input } from '@nextui-org/input';

const AddressBookPage: React.FC = () => {
  const router = useRouter();

  return (
    <section className='flex w-full flex-col gap-4'>
      <Button
        variant='light'
        onClick={() => router.back()}
        startContent={<CaretLeft size={16} />}
        className='self-start'
      >
        Quay lại
      </Button>

      <h1 className='my-4 text-5xl font-semibold'>Address book</h1>

      <Input name='search' placeholder='Search' radius='lg' startContent={<MagnifyingGlass />} />

      <Card className='w-full'>
        <CardBody className='gap-2'>
          {Array.from({ length: 20 }).map((_, index) => (
            <React.Fragment key={index}>
              <Link
                href={`/address-book/${index}`}
                className='flex flex-row items-center justify-between gap-3 rounded-xl p-2 transition-all hover:bg-zinc-800'
              >
                <div className='flex flex-row items-center gap-3'>
                  <Avatar src='https://i.pravatar.cc/150?u=a042581f4e29026024d' isBordered />

                  <div className='flex flex-col gap-1'>
                    <div className='font-semibold'>John Doe</div>
                    <div className='text-xs text-gray-500'>+1 (234) 567-8901</div>
                  </div>
                </div>
              </Link>

              {index !== 20 - 1 && <Divider orientation='horizontal' />}
            </React.Fragment>
          ))}
        </CardBody>
      </Card>
    </section>
  );
};

export default AddressBookPage;
