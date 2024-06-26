'use client';

import { Avatar } from '@nextui-org/avatar';
import { Button } from '@nextui-org/button';
import { Card, CardBody } from '@nextui-org/card';
import { Camera, CaretLeft, MagnifyingGlass, Plus, Star } from '@phosphor-icons/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { Divider } from '@nextui-org/divider';
import Link from 'next/link';
import { Input } from '@nextui-org/input';
import { Chip } from '@nextui-org/chip';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@nextui-org/modal';
import { Accordion, AccordionItem } from '@nextui-org/accordion';
import useListUser from '../../hooks/useListUser';
import type { IUser } from '../../types';

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
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { data, isLoading } = useListUser();

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const alphabetizedData = alphabet
    .map((letter) => {
      return {
        letter,
        data: MOCK_DATA?.filter(({ firstName }) => firstName.startsWith(letter)),
      };
    })
    ?.filter(({ data }) => data?.length > 0);

  return (
    <section className='relative flex w-full flex-col gap-6'>
      <Button
        variant='light'
        onClick={() => router.back()}
        startContent={<CaretLeft size={16} />}
        className='self-start'
      >
        Quay lại
      </Button>

      <h1 className='my-4 text-5xl font-semibold'>Contact</h1>

      <Input name='search' placeholder='Search' radius='lg' startContent={<MagnifyingGlass />} />

      <Accordion>
        <AccordionItem
          key='favorites'
          title={
            <div className='flex flex-row items-center gap-2 font-semibold'>
              <Star weight='fill' className='fill-amber-400' />
              Favorites
            </div>
          }
        >
          <div className='grid w-full grid-cols-3 gap-3'>
            {!isLoading &&
              MOCK_DATA?.map(({ id, firstName, imageUrl }) => (
                <Link
                  href={`/contact/${id}`}
                  key={id}
                  className='flex flex-col items-center gap-2 text-center'
                >
                  <Avatar radius='sm' size='lg' src={imageUrl} />
                  <div className='text-xs'>{firstName}</div>
                </Link>
              ))}
          </div>
        </AccordionItem>
      </Accordion>

      <Card className='w-full'>
        <CardBody className='gap-2'>
          {!isLoading &&
            alphabetizedData.map(({ letter, data }, index) => (
              <React.Fragment key={letter}>
                <Chip variant='solid' radius='sm' className='[&:not(:first-child)]:mt-6'>
                  {letter}
                </Chip>

                {data.map(({ id, firstName, lastName, address }, index) => (
                  <React.Fragment key={id}>
                    <Link
                      href={`/contact/${id}`}
                      className='flex flex-row items-center justify-between gap-3 rounded-xl p-2 transition-all hover:bg-zinc-800'
                    >
                      <div className='flex flex-row items-center gap-3'>
                        <Avatar
                          src='https://i.pravatar.cc/150?u=a33b6530-fb3c-4661-bf19-56862e1ba4ad'
                          isBordered
                          className='shrink-0'
                        />

                        <div className='flex flex-col gap-1'>
                          <div className='font-semibold'>
                            {firstName} {lastName}
                          </div>
                          <div className='line-clamp-1 break-all text-xs text-gray-500'>
                            {address}
                          </div>
                        </div>
                      </div>
                    </Link>

                    {index !== data.length - 1 && <Divider orientation='horizontal' />}
                  </React.Fragment>
                ))}

                {index !== alphabetizedData.length - 1 && <Divider orientation='horizontal' />}
              </React.Fragment>
            ))}
        </CardBody>
      </Card>

      <Button
        isIconOnly
        variant='shadow'
        color='primary'
        className='fixed bottom-8 right-8 h-16 w-16'
        size='lg'
        onClick={onOpen}
      >
        <Plus size={24} weight='bold' />
      </Button>

      <Modal
        isOpen={isOpen}
        placement='bottom-center'
        isDismissable
        onOpenChange={onOpenChange}
        backdrop='opaque'
        classNames={{
          backdrop: 'bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20',
        }}
      >
        <ModalContent>
          {(onClose) => (
            <ModalContent>
              <ModalHeader className='flex flex-col gap-1'>Modal Title</ModalHeader>
              <ModalBody className='flex flex-col items-center'>
                <div className='flex h-20 w-20 items-center justify-center rounded-xl bg-zinc-600'>
                  <Camera size={24} />
                </div>
                <Input placeholder='Address' name='Name' />
                <Input placeholder='Name' name='Address' />
              </ModalBody>
              <ModalFooter>
                <Button variant='light' onPress={onClose}>
                  Cancel
                </Button>
                <Button color='primary' onPress={onClose}>
                  Save
                </Button>
              </ModalFooter>
            </ModalContent>
          )}
        </ModalContent>
      </Modal>
    </section>
  );
};

export default AddressBookPage;
