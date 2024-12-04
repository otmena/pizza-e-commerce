'use client'
import React, { useState } from 'react'
import { FilterCheckBox, FilterChecboxProps } from './filter-checkbox';
import { Input, Skeleton } from '../ui';

type Item = FilterChecboxProps;

type Props = {
  title: string;
  items: Item[]; // Все чекбоксы
  defaultItems?: Item[]; // Сколько чекбоксов будет показываться при первом рендере
  limit?: number; // Сколько можем показывать
  loading?: boolean;
  searchInputPlaceholder?: string;
  onClickCheckbox?: (id: string) => void;
  defaultValue?: string[]; // Можем передавать какие чекбоксы были выбраны при перезагрузке страницы
  className?: string;
  selectedValues?: Set<string>;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function CheckboxFiltersGroup({title, items, defaultItems, limit = 6, searchInputPlaceholder, loading, className, onClickCheckbox, defaultValue, selectedValues}: Props) {
  const [showAll, setShowAll] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }

  if(loading) {
    return <div className={className}>
      <p className="font-bold mb-3">{title}</p>

      {
        ...Array(limit).fill(0).map((_, index) => (
          <Skeleton key={index} className='h-6 mb-4 rounded-[8px]' />
        ))
      }
    </div>
  }

  const list = showAll ? items.filter((item) => item.text.toLowerCase().includes(searchValue.toLocaleLowerCase())) : (defaultItems || items).slice(0, limit);

  return (
    <div className={className}>
      <p className='font-bold mb-3'>{title}</p>

      {
        showAll &&
         (<div className='mb-5'>
           <Input onChange={onChangeSearchInput} placeholder='Поиск...' className='bg-gray-50 border-none' />
         </div>)
      }  

      <div className='flex flex-col gap-1 max-h-96 pr-2 overflow-auto scrollbar'>
        {list.map((item, index) => (
          <FilterCheckBox key={index} text={item.text} value={item.value} endAdornment={item.endAdornment} checked={selectedValues?.has(item.value)} onCheckedChange={() => onClickCheckbox?.(item.value)}/>
        ))}
      </div>

        {items.length > limit && (
          <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
            <button onClick={() => setShowAll(!showAll)} className='text-primary mt-3'>
              {showAll ? 'Скрыть' : '+ Показать все'}
            </button>
          </div>
        )}

    </div>
  )
}