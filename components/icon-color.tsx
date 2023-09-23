import React from 'react'
import { Slider } from './ui/slider'

type Props = {
  color: string,
  setColor: (size: string) => void
}

const IconColor = (props: Props) => {
  return (
    <div className='my-5 flex items-center'>
      <p className='text-sm'>Stroke Color</p>
      <div className='ml-2 flex items-center'>
        <input type='color' className='bg-white' onChange={(e) => props.setColor(e?.target?.value)} />
        <p className='pl-4'>{props.color}</p>
      </div>
    </div>
  )
}

export default IconColor