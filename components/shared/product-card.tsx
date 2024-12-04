/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react'
import { Title } from './title';
import { Button } from '../ui';
import { Plus } from 'lucide-react';

type Props = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  className?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ProductCard({id, name, price, imageUrl, className}: Props) {
  return (
    <div className='relative'>
      <Link href='/product/1'>
        <div className='flex justify-center p-6 bg-secondary rounded-lg h-[260px]'>
          <img className='w-[215px] h-[215px]' src={imageUrl} alt="Logo" />
        </div>

        <Title text={name} size='sm' className='mb-1 mt-3 font-bold'/>

        <p className='text-sm text-gray-400'>Описание</p>

        <div className="flex justify-between items-center mt-4">
          <span className='text-[20px]'>от <b>{price}</b> ₽</span>
          <Button variant='secondary'>
            <Plus className='w-5 h-5 mr-1'/>
            Добавить
          </Button>
        </div>
      </Link>
    </div>
  )
}