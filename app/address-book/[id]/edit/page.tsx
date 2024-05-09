'use client';

import { Button } from '@nextui-org/button';
import { CaretLeft } from '@phosphor-icons/react';
import { useParams, useRouter } from 'next/navigation';
import { Textarea, Input } from '@nextui-org/input';
import { format } from 'date-fns';
import { Card, CardBody } from '@nextui-org/card';

const AddressDetailEditPage: React.FC = () => {
  const router = useRouter();
  const { id } = useParams();

  return (
    <section className='flex w-full flex-col items-center justify-center gap-4'>
      <Button startContent={<CaretLeft />} onClick={() => router.back()}>
        Go back
      </Button>

      <Card className='flex w-full flex-col gap-1'>
        <CardBody>
          <h1 className='mb-6 text-2xl font-semibold'>Address detail</h1>

          <div className='flex flex-col gap-3'>
            <div>ID: {id}</div>

            <Input name='name' label='Name' placeholder='Name' radius='lg' />

            <Input name='address' label='Address' placeholder='Address' radius='lg' />

            <Textarea
              name='note'
              label='Note'
              placeholder='Note'
              radius='lg'
              minRows={3}
              maxRows={5}
            />

            <div>Last updated: {format(new Date(), 'dd/MM/yyyy')}</div>
          </div>
        </CardBody>
      </Card>
    </section>
  );
};

export default AddressDetailEditPage;
