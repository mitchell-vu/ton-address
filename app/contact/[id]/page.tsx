'use client';

import { useParams, useRouter } from 'next/navigation';
import { Snippet } from '@nextui-org/snippet';
import { Avatar } from '@nextui-org/avatar';
import { Card, CardBody } from '@nextui-org/card';
import { Button } from '@nextui-org/button';
import { CaretLeft } from '@phosphor-icons/react';

const AddressDetailPage: React.FC = () => {
  const router = useRouter();
  const { id } = useParams();

  return (
    <section className='flex w-full flex-col gap-4'>
      <Button
        variant='light'
        onClick={() => router.back()}
        startContent={<CaretLeft size={16} />}
        className='self-start'
      >
        Chi tiết
      </Button>

      <Avatar
        src='https://i.pravatar.cc/150?u=a042581f4e29026024d'
        radius='md'
        isBordered
        className='z-50 mx-auto -mb-8 h-24 w-24'
      />

      <Card className='w-full'>
        <CardBody className='gap-4'>
          {[
            { title: 'ID', render: id },
            { title: 'Name', render: 'Mitchell Vu' },
            {
              title: 'Address',
              render: (
                <Snippet variant='bordered' className='line-clamp-1 w-full break-all' symbol={null}>
                  <span className='line-clamp-1 w-full break-all'>234sfasdfsag134</span>
                </Snippet>
              ),
            },
          ].map(({ title, render }, index) => (
            <div key={index} className='flex flex-col gap-2'>
              <div className='text-xs font-bold'>{title}</div>
              <div>{render}</div>
            </div>
          ))}
        </CardBody>
      </Card>
    </section>
  );
};

export default AddressDetailPage;
