'use client';

import { Avatar } from '@nextui-org/avatar';
import { Button } from '@nextui-org/button';
import { Card, CardBody } from '@nextui-org/card';
import { ArrowDownLeft, CaretLeft, MagnifyingGlass } from '@phosphor-icons/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { Divider } from '@nextui-org/divider';
import { Input } from '@nextui-org/input';
import { Chip } from '@nextui-org/chip';
import { humanizeNumber, nanoToNumber } from '@/utils/number';
import { useTransactions } from '@/hooks';
import { useTonAddress } from '@tonconnect/ui-react';

const MOCK_DATA = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Cox',
    address: '8801725cf08eba40d1793c3a0487c550142134992f93062dfbceba9873bb8903',
    imageUrl: 'https://i.pravatar.cc/150?u=a33b6530-fb3c-4661-bf19-56862e1ba4ad',
  },
  {
    id: 2,
    firstName: 'Matthew',
    lastName: 'Dillon',
    address: '2560466ddfabd299a585fb1fdaba58a92f7d15966206e4f22ac32180d54e6de3',
    imageUrl: 'https://i.pravatar.cc/150?u=29155efe-988f-448f-8e95-f3af1791321d',
  },
  {
    id: 3,
    firstName: 'Brittany',
    lastName: 'Banks',
    address: '795da1d8eb0017b6a74fc402ec9f5fbbad282c1247933877209b0ac742003f96',
    imageUrl: 'https://i.pravatar.cc/150?u=eac88e65-e5b4-4c61-9e36-10d64856b52b',
  },
  {
    id: 4,
    firstName: 'Crystal',
    lastName: 'Crawford',
    address: 'd335bcf61291b929ebc08a5973d7286ea0cd71cab73e21767d1ff0a5275c74d9',
    imageUrl: 'https://i.pravatar.cc/150?u=77d5c750-4090-4827-b626-7a6b8541af84',
  },
  {
    id: 5,
    firstName: 'Sabrina',
    lastName: 'Miles',
    address: 'd69293885faad9e967f093b8dc9914008671e008f180d43cd4e0169c64d53ed3',
    imageUrl: 'https://i.pravatar.cc/150?u=001ce470-ca16-4e03-ac9a-7252b5b32c6e',
  },
  {
    id: 6,
    firstName: 'Emily',
    lastName: 'Meyers',
    address: '839093102fea56a2b03f0c20c9e8ac4055b8416307dfbe33bcf0449cfe03c87c',
    imageUrl: 'https://i.pravatar.cc/150?u=fbbdcf3a-a0e9-414d-9557-8027ba487a06',
  },
  {
    id: 7,
    firstName: 'Kenneth',
    lastName: 'Robinson',
    address: '792e5c45a627d3e3fdef5f6aea09dab041786a4195d9ab3e7ba6f346f8e92e14',
    imageUrl: 'https://i.pravatar.cc/150?u=a53ca6e5-402a-4039-8602-710937f751ee',
  },
  {
    id: 8,
    firstName: 'Thomas',
    lastName: 'Nelson',
    address: 'ad4c36bdfdca4379df5703d32e10fccadc47cbc620c598ca7e08d6e706e4f2a9',
    imageUrl: 'https://i.pravatar.cc/150?u=bbe17c9d-1009-470c-968a-bf79d73ec283',
  },
  {
    id: 9,
    firstName: 'Jasmine',
    lastName: 'Smith',
    address: '1c6a80966ff8b19e36f4b11b542c12bb4a831bd2e08ce777aa3d04fd36aa2d34',
    imageUrl: 'https://i.pravatar.cc/150?u=12ae8065-bd3d-4f8e-92b6-408e59ec7592',
  },
  {
    id: 10,
    firstName: 'Patricia',
    lastName: 'Gray',
    address: 'a8971b8760b9027cfd46040598c489e7cced4b5acdb1e16310a89c675adf69b7',
    imageUrl: 'https://i.pravatar.cc/150?u=83f55d90-138d-4c35-84dd-ec08b5bce727',
  },
];

const AddressBookPage: React.FC = () => {
  const router = useRouter();
  const address = useTonAddress();

  const { data, isLoading, isSuccess } = useTransactions(address);

  console.log(data);
  return (
    <section className='relative flex w-full flex-col gap-4'>
      <Button
        variant='light'
        onClick={() => router.back()}
        startContent={<CaretLeft size={16} />}
        className='self-start'
      >
        Quay lại
      </Button>

      <h1 className='my-4 text-5xl font-semibold'>Transaction History</h1>

      <Input name='search' placeholder='Search' radius='lg' startContent={<MagnifyingGlass />} />

      <Card className='w-full'>
        <CardBody className='gap-2'>
          {data?.map(({ fee }, index) => (
            <React.Fragment key={index}>
              <div className='flex flex-col gap-2 p-2'>
                <div className='flex flex-row items-center gap-2'>
                  <Chip
                    size='sm'
                    startContent={<ArrowDownLeft />}
                    radius='sm'
                    color='success'
                    variant='flat'
                  >
                    Receive
                  </Chip>

                  <div className='line-clamp-1 whitespace-nowrap text-xs'>From {address}</div>
                </div>

                <div className='flex flex-row items-center justify-between text-sm'>
                  <div className='flex flex-row items-center gap-2'>
                    <Avatar
                      src='https://i.pravatar.cc/150?u=12ae8065-bd3d-4f8e-92b6-408e59ec7592'
                      className='h-6 w-6'
                    />
                    sdf
                  </div>
                  <div className='font-semibold'>
                    + {humanizeNumber(nanoToNumber(Number(fee)), 'standard', 8)} TON
                  </div>
                </div>
              </div>

              {index !== MOCK_DATA.length - 1 && <Divider orientation='horizontal' />}
            </React.Fragment>
          ))}
        </CardBody>
      </Card>
    </section>
  );
};

export default AddressBookPage;
