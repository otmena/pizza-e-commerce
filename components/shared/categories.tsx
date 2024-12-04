'use client'

import { cn } from '@/lib/utils'
import { useCategoryStore } from '@/store/category';
import { Category } from '@prisma/client';

type Props = {
  className?: string;
  items: Category[];
}

export function Categories({items, className}: Props) {  
  const categoryActiveId = useCategoryStore((state) => state.activeId);

  const handleScroll = (name: string) => {
    const section = document.getElementById(name);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      {
        items.map(({name, id}, index) => (
          <a className={cn('flex items-center font-bold h-11 rounded-2xl px-5', 
            categoryActiveId === id && 'bg-white shadow-md shadow-gray-200 text-primary'
          )} 
          key={index}>
            <button onClick={() => handleScroll(name)}>
              {name}
            </button>
          </a>
        ))
      }
    </div>
  )
}