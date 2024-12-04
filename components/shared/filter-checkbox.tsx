import React from 'react'
import { Checkbox } from '../ui'

export interface FilterChecboxProps {
  text: string;
  value: string;
  endAdornment?: React.ReactNode;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
}

type Props = {
  className?: string;
  value: string;
  text: string;
  endAdornment?: React.ReactNode;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
}

export function FilterCheckBox({text, value, endAdornment, onCheckedChange, checked, }: Props) {
  return (
    <div className='flex items-center space-x-2 mt-4'>
      <Checkbox onCheckedChange={onCheckedChange} checked={checked} value={value} className='rounded-[8px] w-6 h-6' id={`checkbox-${String(value)}`}/>
      <label htmlFor={`checkbox-${String(value)}`} className='leading-none cursor-pointer flex-1'>{text}</label>
      {endAdornment}
    </div>

  )
}