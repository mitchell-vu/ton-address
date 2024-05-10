'use client';

import { Avatar } from '@nextui-org/avatar';
import { Button } from '@nextui-org/button';
import { Card, CardBody } from '@nextui-org/card';
import { CaretLeft, MagnifyingGlass, Plus, Star } from '@phosphor-icons/react';
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

const AddressBookPage: React.FC = () => {
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { data, isLoading } = useListUser();

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const alphabetizedData = alphabet
    .map((letter) => {
      return {
        letter,
        data: data?.filter(({ name }: IUser) => name.startsWith(letter)) as IUser[],
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
              data?.map(({ id, name }) => (
                <Link
                  href={`/contact/${id}`}
                  key={id}
                  className='flex flex-col items-center gap-2 text-center'
                >
                  <Avatar
                    radius='sm'
                    size='lg'
                    src='https://i.pravatar.cc/150?u=a33b6530-fb3c-4661-bf19-56862e1ba4ad'
                  />
                  <div className='text-xs'>{name}</div>
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

                {data.map(({ id, name, address }, index) => (
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
                          <div className='font-semibold'>{name}</div>
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
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                  risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                  quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                  risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                  quam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color='danger' variant='light' onPress={onClose}>
                  Close
                </Button>
                <Button color='primary' onPress={onClose}>
                  Action
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
