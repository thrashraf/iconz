import React from 'react'
import { Slider } from './ui/slider'

type Props = {
  size: number,
  setSize: (size: number) => void
}

const IconSize = (props: Props) => {
  return (
    <div className='my-5 flex items-center gap-2'>
      <p className='text-xs'>Icon size</p>
      <Slider
        onValueChange={(e) => props.setSize(e?.[0])}
        value={[props.size]}
        defaultValue={[16]}
        min={16}
        max={100}
        className='ml-[19px] w-[180px]'
      />
      <p className='text-xs'>{props.size}px</p>
    </div>
  )
}

export default IconSize