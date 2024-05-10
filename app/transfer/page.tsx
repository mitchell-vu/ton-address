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
import { IUser } from '../../types';

const TransferPage: React.FC = () => {
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { data, isLoading } = useListUser();

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

      <Input
        name='search'
        placeholder='Wallet Address'
        radius='lg'
        startContent={<MagnifyingGlass />}
      />

      <div className='flex w-full flex-wrap gap-4 md:flex-nowrap'>
        <Input type='text' label='Address Wallet' />
        <Input
          type='number'
          label='Amount'
          placeholder='0.00'
          startContent={
            <div className='pointer-events-none flex items-center'>
              <span className='text-small text-default-400'>TON</span>
            </div>
          }
        />
      </div>
    </section>
  );
};

export default TransferPage;
