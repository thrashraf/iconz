import React from 'react'
import { Slider } from './ui/slider'

type Props = {
  size: number,
  setSize: (size: number) => void
}

const IconWidth = (props: Props) => {
  return (
    <div className='my-5 flex items-center gap-2 text-center'>
      <p className='text-xs '>Stroke width</p>
      <Slider
        onValueChange={(e) => props.setSize(e?.[0])}
        value={[props.size]}
        defaultValue={[1]}
        min={1}
        max={4}
        className='h-2 w-[180px]'
      />
      <p className='text-xs'>{props.size}px</p>
    </div>
  )
}

export default IconWidth