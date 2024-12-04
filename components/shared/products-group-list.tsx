/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import React from 'react'
import { Title } from '.';
import { cn } from '@/lib/utils';
import { ProductCard } from './product-card';
import { useIntersection } from'react-use'
import { useCategoryStore } from '@/store/category';

type Props = {
  title: string;
  items: any[];
  categoryId: number;
  className?: string;
  listClassName?: string;
}

export function ProductsGroupList({title, items, className, listClassName, categoryId}: Props) {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId)
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, { 
    threshold: 0.4,
  });

  React.useEffect(() => {
    if(intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [categoryId, intersection?.isIntersecting, setActiveCategoryId, title])
  return (
    <div className={cn('', className) } id={title} ref={intersectionRef}>
      <Title text={title} size='lg' className='font-extrabold mb-5'/>
      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
        {items.map((item, i) => (
          <ProductCard key={item.id} id={item.id} name={item.name} imageUrl={item.imageUrl} price={item.items?.[0]?.price || 0}/>
        ))}
      </div>
    </div>
  )
}