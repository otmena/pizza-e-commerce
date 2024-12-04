import React from 'react'
import { Categories } from './categories'
import { SortPopup } from './sort-popup'
import { cn } from '@/lib/utils'
import { Container } from './container'
import { Category } from '@prisma/client'

type Props = {
  categories: Category[]
  className?: string;
}

export function TopBar({categories, className}: Props) {
  return (
    <div className={cn('sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10', className)}>
      <Container className='flex items-center justify-between'>
        <Categories items={categories}/>
        <SortPopup />
      </Container>
    </div>
  )
}